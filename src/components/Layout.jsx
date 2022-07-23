import PropTypes from 'prop-types';
import cx from 'classnames';

function Layout({ children, isHeader }) {
  const containerClass = 'relative w-full bg-white items-center justify-center overflow-hidden';

  return (
    <div
      className={cx({
        'pt-14': isHeader,
      })}
    >
      <div
        className={cx(`${containerClass} min-h-screen `, {
          'min-h-[calc(100vh_-_56px)]': isHeader,
        })}
      >
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHeader: PropTypes.oneOfType([PropTypes.bool]),
};

Layout.defaultProps = {
  isHeader: false,
};

export default Layout;
