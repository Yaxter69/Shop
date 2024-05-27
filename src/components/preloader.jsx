import { GoodsItem } from "./GoodsItem";

function GoodsList (props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        return <h3>Not found</h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
            <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket}/>
            ))}
        </div>
    );
}
export { GoodsList };
function Preloader() {
    return    <div className="preloader-wrapper big active">
    <div className="spinner-layer spinner-blue">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>

    <div className="spinner-layer spinner-red">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>

    <div className="spinner-layer spinner-yellow">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>

    <div className="spinner-layer spinner-green">
      <div className="circle-clipper left">
        <div className="circle"></div>
      </div><div className="gap-patch">
        <div className="circle"></div>
      </div><div className="circle-clipper right">
        <div className="circle"></div>
      </div>
    </div>
  </div>
}

export { Preloader };