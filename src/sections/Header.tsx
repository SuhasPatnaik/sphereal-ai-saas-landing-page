import logoImg from "@/assets/images/sphereal-logo.svg?url";

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
];

const Header = () => {
  return (
    <header className="border-b border-gray-200/20">
      <div className="container">
        <div className="h-18 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <div
              className="size-10 bg-conic-gradient"
              style={{ maskImage: `url(${logoImg.src})`, maskSize: "contain" }}
            ></div>
            <div className="font-extrabold text-2xl">sphereal.ai</div>
          </div>
          <div></div>
          <div className="flex items-center">
            <button className="size-10 rounded-lg border-2 border-transparent [background:conic-gradient(from_30deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300))_border-box]">
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
