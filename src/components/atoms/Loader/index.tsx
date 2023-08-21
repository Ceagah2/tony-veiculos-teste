import './styles.css';
const Loader = () => {
  return (
    <div className="lds-ring" testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
