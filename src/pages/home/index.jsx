import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Select, Input, Button, Row, Col } from 'antd';

import { isNull } from 'lodash';
import { getUser } from '../../features/home/slice';
import { Layout } from '../../components';
import { transformObjToQuery } from '../../utils/helpers';
import useDebounce from '../../hooks/useDebounce';
import useFirstRender from '../../hooks/useFirstRender';

const { Option } = Select;

const DEFAULT_LIMIT = 10;
const columns = [
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    sorter: (a, b) => a.gender.localeCompare(b.gender),
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: 'Cell',
    dataIndex: 'cell',
    key: 'cell',
    sorter: (a, b) => a.cell.length - b.cell.length,
  },
];
const optionValue = [
  {
    value: 'all',
    title: 'All',
  },
  {
    value: 'female',
    title: 'Female',
  },
  {
    value: 'male',
    title: 'Male',
  },
];
function Home() {
  const dispatch = useDispatch();
  const [gender, setGender] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [defaultValueGender, setDefaultValueGender] = useState('all');
  const queryDebounce = useDebounce(query, 500);
  const isFirstRender = useFirstRender();

  const homeState = useSelector((state) => state.home);
  useEffect(() => {
    dispatch(
      getUser(
        transformObjToQuery({
          results: DEFAULT_LIMIT,
        }),
      ),
    );
  }, [dispatch]);

  const onchangeQuery = useCallback(() => {
    /* reset the page */
    setPage(1);
    dispatch(
      getUser(
        transformObjToQuery({
          results: DEFAULT_LIMIT,
          ...(query
            ? {
              seed: query,
            }
            : {}),
          ...(gender
            ? {
              gender,
            }
            : {}),
        }),
      ),
    );
  }, [dispatch, gender, query]);

  const handleChange = useCallback((value) => {
    setGender(value);
    /* reset the page */
    setPage(1);
    dispatch(
      getUser(
        transformObjToQuery({
          results: DEFAULT_LIMIT,
          ...(value !== 'all'
            ? {
              gender: value,
            }
            : {}),
          ...(query
            ? {
              seed: query,
            }
            : {}),
        }),
      ),
    );
  }, [dispatch, query]);

  const clearFilter = useCallback(() => {
    if (!isNull(gender) || !isNull(query)) {
      setGender(null);
      setQuery(null);
      setDefaultValueGender('all');
    }
  }, [gender, query]);

  const onChangePage = useCallback((value) => {
    setPage(value.current);
    if (page !== value.current) {
      dispatch(
        getUser(
          transformObjToQuery({
            page: value.current,
            results: DEFAULT_LIMIT,
            ...(gender
              ? {
                gender,
              }
              : {}),
            ...(query
              ? {
                seed: query,
              }
              : {}),
          }),
        ),
      );
    }
  }, [dispatch, gender, page, query]);

  useEffect(() => {
    if (isFirstRender === false) {
      onchangeQuery(queryDebounce);
    }
  }, [queryDebounce]);

  return (
    <Layout header={false} footer>
      {homeState?.user?.data?.results && homeState?.user?.data?.results.length > 0 && (
        <div className="px-3.5 pt-4">
          <Row className="pb-4" gutter={16}>
            <Col>
              <Input
                disabled={homeState?.user?.loading}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
            </Col>
            <Col>
              <Select
                disabled={homeState?.user?.loading}
                defaultValue={defaultValueGender}
                style={{ width: 120 }}
                onChange={handleChange}
              >
                {optionValue.map((value) => (
                  <Option value={value.value}>{value.title}</Option>
                ))}
              </Select>
            </Col>
            <Col>
              <Button
                disabled={homeState?.user?.loading}
                onClick={clearFilter}
              >Clear
              </Button>
            </Col>
          </Row>
          <Table
            pagination={{
              current: page,
              pageSize: DEFAULT_LIMIT,
              hideOnSinglePage: true,
              showSizeChanger: false,
              // @todo pass the total value from api so we can know the last pagination
              total: 100,
            }}
            loading={homeState?.user?.loading}
            dataSource={homeState?.user?.data?.results}
            columns={columns}
            onChange={onChangePage}
          />
        </div>
      )}
    </Layout>
  );
}

export default Home;
