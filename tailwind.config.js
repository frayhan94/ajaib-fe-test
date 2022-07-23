module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '425px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      display: ['Roboto', 'sans-serif'],
      body: ['Roboto Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        accent: '#A988CC',
        primary: '#A988CC',
        secondary: '#58585a',
        desc: '#979797',
        success: '#00CC88',
        danger: '#E25C5C',
        warning: '#DCB428',
        body: '#f5f5f5',
        light: '#fafafa',
        dark: '#454547',
      },
      fontSize: {
        tiny: ['0.625rem', '0.875rem'],
      },
      maxWidth: {
        md: '30rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'primary-btn': 'linear-gradient(88.53deg, rgba(169, 136, 204, 0.75) 0%, #A988CC 100%)',
        topbar: 'linear-gradient(87.31deg, rgba(169, 136, 204, 0.75) 0%, #A988CC 100%)',
        radial: 'linear-gradient(270deg, #A988CC 0%, #8B6AAE 35.94%, #8B6AAE 59.9%, #A988CC 100%)',
        onboarding: 'linear-gradient(216.03deg, rgba(169, 136, 204, 0.5) 0%, #A988CC 100%)',
        polygon:
          'linear-gradient(199.37deg, rgba(219, 39, 234, 0) 38.5%, rgba(177, 139, 218, .04) 38.5%), linear-gradient(79.16deg, rgba(242, 237, 247, .11) 0%, rgba(190, 166, 217, .09) 61.98%, rgba(203, 184, 224, .07) 61.99%, rgba(242, 237, 247, .12) 100%)',
        linear: 'linear-gradient(45deg, rgba(173,113,213,1) 0%, rgba(229,210,243,1) 100%)',
        menu: 'radial-gradient(100% 100% at 0% 100%, rgba(169, 136, 204, .9) 0%, #A988CC 100%)',
      },
      boxShadow: {
        sm: '0px 1px 4px 1px rgba(0, 0, 0, 0.1)',
        indicator: '0 0 0 4px #ba9ed5',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
