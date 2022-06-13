import axios from 'axios'
import React, { Component } from 'react'
import Footer from '../../component/Footer/Footer'
import Header from '../../component/Header/Header'
import { Link } from 'react-router-dom'
import withSearchParams from '../../Helper/withSearchParams'
import withLocation from '../../Helper/withLocation'
// import { Routes, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { formater } from '../../Helper/formatNumber'


import "./Product.css"

//import Check from "../../assets/img/Vectorcheck.png"
import mothersImg from "../../assets/img/image 46.png";
import sundayImg from "../../assets/img/image 43.png";
import halloweenImg from "../../assets/img/image 45.png";

// import ColdBrew from "../../assets/img/coldbrew.png"

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      categoryActive: "all",
      doAxios: false,
      sort: "category",
      order: "asc",
      page: 1,
      limit: "12",
      totalPage: "1",
      searchProduct: this.props.searchProduct,
      meta: null,
      pageActive: "product",
      setSearchParams: this.props.setSearchParams.bind(this)

    };
  }

  // setSearchName = (props) => {
  //     this.setState({
  //         searchName: props
  //     })
  // }

  componentDidMount() {
    document.title = "Product"
    console.log(this.state.searchProduct)
    this.state.setSearchParams('')
    axios
      .get('http://localhost:8000/products')
      .then(result => {
        this.setState({
          product: result.data.data,
          totalPage: result.data.meta.totalPage
        });
      }).catch(error => {
        console.log(error)
      })
  }

  componentDidUpdate() {
    if (this.state.doAxios) {
      let params = ''
      let url = `http://localhost:8000/products`
      if (this.state.categoryActive === "all") {
        url += `?page=${this.state.page}&limit=${this.state.limit}&`
        params += `page=${this.state.page}&limit=${this.state.limit}&`
      }
      if (this.state.categoryActive === "favorite") {
        url += `/favorite?`
        params += 'categories=favorite&'
      }
      if (this.state.categoryActive !== "all" && this.state.categoryActive !== "favorite") {
        url += `?categories=${this.state.categoryActive}&page=${this.state.page}&limit=${this.state.limit}&`
        params += `categories=${this.state.categoryActive}&page=${this.state.page}&limit=${this.state.limit}&`
      }

      if (this.props.searchProduct) {
        url += `find=${this.state.searchProduct}&`
        params += `find=${this.state.searchProduct}&`
      }
      url += `sort=${this.state.sort}&order=${this.state.order}`
      params += `sort=${this.state.sort}&order=${this.state.order}`
      this.state.setSearchParams(params)

      axios
        .get(url)
        .then(result => {
          console.log(result)
          this.setState({
            product: result.data.data,
            totalPage: !result.data.meta ? "1" : result.data.meta.totalPage
          });
        }).catch(error => {
          console.log(error)
        })
      this.setState({
        doAxios: false
      })
    }


    // if(this.state.searchName !== ''){
    //     axios
    //         .get(`http://localhost:8080/products?name=${this.state.searchName}`)
    //         .then(result=>{
    //             this.setState({
    //                 product: result.data.data
    //             })
    //             this.setState({
    //                 searchName: ''
    //             })
    //         })
    //         .catch(error=>{
    //             console.log(error)
    //         })
    // }
  }

  render() {
    // const { searchParam } = this.props
    return (
      <div>
        <Header />
        <div className="container-fluid">
        <div className="row" style={{ height: "100%", maxWidth: "100%", paddingLeft: "1%", marginBottom: "80px", paddingTop: "20px"}}>
          <div className="col-sm-4" style={{ width: "40%", borderRight: "0.5px solid rgba(159, 159, 159, 1)" }}>
            <div className="custom-promo-title">
              <h3 className="custom-promo-title-head">Promo Today</h3>
              <p className="custom-promo-paragraph">Coupons will be updated every weeks. Check them out! </p>
            </div>
            <div className="custom-promo-card row mother-day-card">
              <div className="col-4 custom-promo-pict"><img
                src={mothersImg}
                alt="mother's-day-promo" className="custom-promo-img" /></div>
              <div className="col custom-card-text">
                <p className="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
              </div>
            </div>
            <div className="custom-promo-card row sunday-morning-card">
              <div className="col-4 custom-promo-pict"><img
                src={sundayImg}
                alt="free-sunday-morning" className="custom-promo-img" /></div>
              <div className="col custom-card-text">
                <p className="custom-card-info"><b>Get a cup of coffee for free on sunday morning</b><br />Only at 7 to 9
                  AM
                </p>
              </div>
            </div>
            <div className="custom-promo-card row mother-day-card">
              <div className="col-4 custom-promo-pict"><img
                src={mothersImg}
                alt="mother's-day-promo" className="custom-promo-img" /></div>
              <div className="col custom-card-text">
                <p className="custom-card-info"><b>HAPPY MOTHER'S DAY!</b><br />Get one of our favorite menu for free!</p>
              </div>
            </div>
            <div className="custom-promo-card row halloween-card">
              <div className="col-4 custom-promo-pict"><img
                src={halloweenImg}
                alt="halloween-promo" className="custom-promo-img" /></div>
              <div className="col custom-card-text">
                <p className="custom-card-info"><b>HAPPY HALLOWEEN!
                </b><br />Do you like chicken wings? Get 1 free only if you buy pinky promise</p>
              </div>
            </div>
            <div className="custom-apply-button">Apply Coupon</div>
            <div className="custom-term">
              <p className="custom-term-title">Terms and Condition</p>
              <p>1. You can only apply 1 coupon per day</p>
              <p>2. It only for dine in</p>
              <p>3. Buy 1 get 1 only for new user</p>
              <p>4. Should make member card to apply coupon</p>
            </div>
          </div>
          <div className="col-sm-8" style={{ borderLeft: "1px rgba(159, 159, 159, 1)", width: "60%" }}>
            <nav className="custom-product-nav">
              <ul className="row">
                <li className="col-2">
                  <div className={this.state.categoryActive === "favorite" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={
                      () => {
                        this.setState({
                          doAxios: true,
                          categoryActive: "favorite"
                        })
                      }
                    }
                  >Favorite & Promo</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "coffee" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={
                      () => {
                        this.setState({
                          doAxios: true,
                          categoryActive: "coffee"
                        })
                      }
                    }
                  >Coffee</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "non coffee" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={() => {
                      this.setState({
                        doAxios: true,
                        categoryActive: "non coffee"
                      })
                    }}
                  >Non Coffee</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "food" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={() => {
                      this.setState({
                        doAxios: true,
                        categoryActive: "food"
                      })
                    }}
                  >Foods</div>
                </li>
                <li className="col">
                  <div className={this.state.categoryActive === "all" ? "custom-product-nav-active" : "custom-product-nav-inactive"}
                    onClick={() => {
                      this.setState({
                        doAxios: true,
                        categoryActive: "all"
                      })

                    }}
                  >All</div>
                </li>
              </ul>
              <div className='dropdown-sort'>
                <label htmlFor="sort-product">Sort by: </label>
                <select name="sort-product" id="sort-product"
                  onClick={(e) => {
                    this.setState({
                      sort: e.target.value
                    })
                  }}
                >
                  <option value="categories">Category</option>
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="created_at">Release</option>
                </select>
                <select name="order-product" id="order-product"
                  onChange={(e) => {
                    this.setState({
                      order: e.target.value
                    })
                  }}
                >
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>
                <div className="confirm-button"
                  onClick={() => {
                    this.setState({
                      doAxios: true
                    })
                  }}
                ><img src="" alt="check" /></div>
              </div>
            </nav>
            <div className="custom-food-container">
              <div className="row row-cols-2 row-cols-md-4 g-4 custom-product-row">
                {this.state.product.length === 0 ? <div>DATA NOT FOUND</div> :
                  this.state.product.map((product) => (
                    <div className="col">
                        <div key={product.id} className="card"
                          style={{ borderRadius: "30px", width: "126px", height: "212.41px", boxShadow: "0px 30px 60px", color: "rgba(57, 57, 57, 0.1)", marginBottom: "40%" }}>
                          <Link to={`/product/detail/${product.id}`}>
                            <img src={`http://localhost:8000${product.pictures}`} className="" alt={product.name} style={{ borderRadius: "100px", width: "70%", marginTop: "-30%", marginLeft: "15%" }}/>
                          </Link>
                        <div className="card-body">
                          <h5 className="card-title custom-product-name" style={{ marginBottom: "35%" }}>
                            {product.name}
                          </h5>
                          <p className="card-text custom-product-price"
                          style={{ textAlign: "center", fontFamily: "Poppins", color: "rgba(106, 64, 41, 1)", }}> {formater.format(product.price)}</p>
                        </div>
                        </div>
                    </div>
                  ))}
              </div>
              <div className='product-page-button-container'>
                <div>
                  {this.state.page === 1 ?
                    <div className='product-page-button-empty'></div> :
                    <div className="product-page-button-prev"
                      onClick={() => {
                        this.setState({
                          page: this.state.page - 1,
                          doAxios: true
                        })
                      }}
                    >Prev Page</div>}
                </div>
                <div className='product-page-number'>{this.state.page}</div>
                <div>
                  {this.state.page === Number(this.state.totalPage) ?
                    <div className='product-page-button-empty'></div> :
                    <div className="product-page-button-next"
                      onClick={() => {
                        this.setState({
                          page: this.state.page + 1,
                          doAxios: true
                        })
                      }}
                    >Next Page</div>}
                </div>
              </div>
              <div className="custom-notes">*the price has been cutted by discount appears</div>
            </div>
          </div>
        </div>
        </div>
        <Footer />
      </div>

    )
  }
}

const mapStateToProps = (reduxState) => {
  const { searchProduct: { searchProduct } } = reduxState
  return { searchProduct }
}

export default connect(mapStateToProps)(withLocation(withSearchParams(Product)))