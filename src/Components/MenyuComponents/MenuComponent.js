import React from 'react'
import { useNavigate } from 'react-router-dom'
import './MenuComponent.scss'
const  MenuComponent = ({image, ranking, title, price}) => {

  const navigate = useNavigate();

  const imge = () => {
    setTimeout(() => {
        navigate("/XaridQilish");
        
    }, 1000);
}
  
  return (
      <div className="menu">
          <div className="menu_container">
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>`
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
            <div className="menu_com">
              <div className="burger">
                  <img src={image} alt="" />
                  <img src={ranking} alt="" />
                  <p>{title}</p>
                  <h5>{price}</h5>
                  <button onClick={imge}>Add to Cart</button>
              </div>
            </div>
          </div>
      </div>
      
  )
}

export default MenuComponent