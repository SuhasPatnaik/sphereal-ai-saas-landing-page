import logoImg from "@/assets/images/sphereal-logo.svg?url";
import Button from "@/components/Button";
import { ButtonProps } from "@/components/Button";
import Link from "next/link";

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  buttonVariant: ButtonProps["variant"];
  name: string;
  href: string;
}[];

const Header = () => {
  return (
    <header className="border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 flex items-center justify-between">
          <div className="h-full flex gap-4 items-center">
            <div
              className="size-10 bg-conic-gradient px-2"
              style={{ maskImage: `url(${logoImg.src})`, maskSize: "contain" }}
            ></div>
            <div className="font-extrabold text-2xl px-2">sphereal.ai</div>
          </div>
          <div className="w-full h-full hidden lg:flex justify-center">
            <nav className="flex">
              {navItems.map((navItem, index) => (
                <Link
                  key={index}
                  href={`${navItem.href}`}
                  className="h-full flex items-center text-sm relative px-12 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-gray-200/20 last:after:absolute last:after:bottom-0 last:after:right-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20"
                >
                  {navItem.name.toUpperCase()}
                </Link>
              ))}
            </nav>
          </div>
          <div className="hidden lg:flex gap-4">
            {loginItems.map(({ buttonVariant, name, href }) => (
              <a key={name} href={href}>
                <Button variant={buttonVariant}>{name}</Button>
              </a>
            ))}
          </div>
          <div className="flex items-center pl-12 lg:hidden">
            <button className="size-10 rounded-lg border-2 border-transparent [background:conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box]">
              <div className="w-full h-full bg-gray-950 rounded-md flex flex-col gap-2 items-center justify-center">
                <div className="w-4 h-0.5 bg-gray-100"></div>
                <div className="w-4 h-0.5 bg-gray-100"></div>
              </div>
              <div></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
