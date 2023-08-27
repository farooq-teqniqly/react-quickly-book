export const MenuItem = ({ href, children, ...rest }) => {
  return (
    <li>
      <a href={href} {...rest}>
        {children}
      </a>
    </li>
  );
};
