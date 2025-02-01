import { ForwardedRef, forwardRef } from "react";
import {
  NavLink,
  NavLinkProps,
  useNavigate,
  useParams,
} from "react-router-dom";

export const useLocalNavigate = () => {
  const navigate = useNavigate();
  const { local } = useParams();
  return (path: string) => {
    navigate(path.startsWith("/") ? `/${local}${path}` : path);
  };
};

export const LocalNavLink = forwardRef(function (
  props: NavLinkProps & { to: string },
  ref: ForwardedRef<HTMLAnchorElement>
) {
  const { local } = useParams();
  return (
    <NavLink
      {...props}
      ref={ref}
      to={props.to.startsWith("/") ? `/${local}${props.to}` : props.to}
    />
  );
});
