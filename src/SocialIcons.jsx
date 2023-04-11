import { social } from "./data";
const SocialLinks = () => {
  return (
    <ul className="social-icons">
      {social.map(({ id, url, icon }) => (
        <a className="social-icon" key={id} href={url}>
          {icon}
        </a>
      ))}
    </ul>
  );
};

export default SocialLinks;
