import './styles.css';
const Loader = () => {
  return (
    <div className="lds-ring" data-testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
