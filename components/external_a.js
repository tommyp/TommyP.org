import PropTypes from "prop-types";

const ExtA = ({
  href,
  children,
  textColor,
  textHoverColor,
  borderColor,
  borderHoverColor,
  className,
}) => {
  return (
    <a
      href={href}
      className={`
        border-b-2
        lg:border-b-2
        border-solid
        transition
        duration-200
        ease-in-out
        ${textHoverColor || "hover:text-gray-600"}
        ${borderHoverColor || borderColor || "hover:border-gray-600"}
        ${textColor || "text-gray-900"}
        ${borderColor || "border-gray-900"}
        ${className || ''}
      `}
    >
      {children}
    </a>
  );
};

ExtA.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  href: PropTypes.string,
  textColor: PropTypes.string,
  textHoverColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderHoverColor: PropTypes.string,
  className: PropTypes.string,
};

export default ExtA;
