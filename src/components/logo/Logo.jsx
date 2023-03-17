export const Logo = './media/logo/bylan-logo.png';

const ByLanLogo = () => {
    return (
        <img
            src={Logo}
            alt={'ByLan Logo'}
            aria-label={'Bylan Logo'}
            width={55}
            height='auto'
        />
    );
};

export default ByLanLogo;
