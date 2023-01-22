const PhotoComponent = ({ alt_description, urls: { regular } }) => {
  return (
    <div>
      <h1>Photo Component</h1>

      <div className="single-photo">
        <img src={regular} alt={alt_description} />
      </div>
    </div>
  );
};

export default PhotoComponent;
