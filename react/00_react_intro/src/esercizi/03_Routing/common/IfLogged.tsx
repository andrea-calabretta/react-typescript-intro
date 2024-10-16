interface IfLoggedProps {
  children: React.ReactNode;
}

const IfLogged = (props: IfLoggedProps ) => {
  const { children } = props;
  return localStorage.getItem('isLogged')
    ? <>{children}</>
    : null
  
}

export default IfLogged
