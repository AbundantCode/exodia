import "./socialButtons.css";

const SocialButton = ({ platform, url, img }) => {
  return (
    <a
      href={url}
      className={`social-button ${platform}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className="social-img" src={img} />
    </a>
  );
};

export default SocialButton;
