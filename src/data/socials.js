/**
 * Contact / social links — data source, from resume.
 * NOTE: resume lists "LinkedIn" and "GitHub" as link text without
 * the actual URLs, so those hrefs are left as TODO placeholders —
 * fill in your real profile URLs before shipping.
 */

export const socials = [
  {
    id: "email",
    label: "Email",
    value: "yashikab601@gmail.com",
    href: "mailto:yashikab601@gmail.com",
    icon: "FiMail",
  },
  {
    id: "phone",
    label: "Phone",
    value: "7385044945",
    href: "tel:+917385044945",
    icon: "FiPhone",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "LinkedIn", // TODO: replace with your LinkedIn handle
    href: "#", // TODO: replace with your LinkedIn profile URL
    icon: "FiLinkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "GitHub", // TODO: replace with your GitHub handle
    href: "#", // TODO: replace with your GitHub profile URL
    icon: "FiGithub",
  },
  {
    id: "location",
    label: "Location",
    value: "Pune, India",
    href: "",
    icon: "FiMapPin",
  },
];
