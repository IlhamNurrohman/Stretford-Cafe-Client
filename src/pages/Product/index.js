import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import CardProduct from "../../component/CardProduct/CardProduct";
import mothersImg from "../../assets/img/image 46.png";
import sundayImg from "../../assets/img/image 43.png";
import halloweenImg from "../../assets/img/image 45.png";


import "./Product.css";
import withSearchParams from "../../Helper/withSearchParams";
import withLocation from "../../Helper/withLocation";
import withParams from "../../Helper/withParams";

import {
    getProduct,
    getFavorite,
    // getSearch,
    getAllProduct,
} from "../../utiliti/product";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                isFavorite: [],
                isCoffee: [],
                isNonCoffee: [],
                isFood: [],
                isAll: [],
                allProduct: [],
                // find: [],
            }
        };
    }
    getAllProductsPage = () => {
        getAllProduct()
            .then((res) => {
                this.setState({
                    product: { ...this.state.product, allProduct: res.data.data },
                });
            })
            .catch((err) => {
                console.log("ERROR GET PRODUCTS", err);
            });
    };
    getFav = () => {
        getFavorite()
            .then((res) => {
                this.setState({
                    product: { ...this.state.product, isFavorite: res.data.data },
                });
            })
            .catch((err) => {
                console.log("Product not defined", err);
            });
    };

    getCoffee = (categories) => {
        getProduct(categories)
            .then((res) => {
                this.setState({
                    product: { ...this.state.product, isCoffee: res.data.data },
                });
            })
            .catch((err) => {
                console.log("Product not defined", err);
            });
    };
    getNonCoffee = (categories) => {
        getProduct(categories)
            .then((res) => {
                this.setState({
                    product: { ...this.state.product, isNonCoffee: res.data.data },
                });
            })
            .catch((err) => {
                console.log("Product not defined", err);
            });
    };
    getFood = (categories) => {
        getProduct(categories)
            .then((res) => {
                console.log(res.data.data);
                this.setState({
                    product: { ...this.state.product, isFood: res.data.data },
                });
            })
            .catch((err) => {
                console.log("Product not defined", err);
            });
    };
    // getSearchProduct = (find) => {
    //     getSearch(find)
    //         .then((res) => {
    //             this.setState({
    //                 product: { ...this.state.product, find: res.data.data },
    //             });
    //         })
    //         .catch((err) => {
    //             console.log("ERROR SEARCH PRODUCT", err);
    //         });
    // };

    componentDidMount() {
        this.getAllProductsPage();
    }

    componentDidUpdate(pageProps) {
        const {
            //location: { find },
            searchParams,
            params,
        } = this.props;
        if (pageProps.searchParams !== searchParams) {
            this.getCoffee("coffee");
            this.getNonCoffee("non coffee");
            this.getFood("food");
            //this.getSearchProduct(find.slice(6));
        }
        if (pageProps.params !== params) {
            this.getFav();
        }
    }

    render() {
        const { searchParams, params,
        } = this.props;

        const { product } = this.state;
        const { isFavorite, isCoffee, isNonCoffee, isFood, categories, allProduct } = product;
        //console.log(isFavorite);
        //const categories = this.props.match.params.categories;
        return (
            <div>
                <Header searchParams={searchParams.get("name")} />
                <div className="container-fluid">
                    <div className="row" style={{ height: "100%", maxWidth: "100%", paddingLeft: "5%", marginBottom: "80px" }}>
                        <div className="col-sm-4" style={{ width: "40%" }}>
                            <h3 className="user-profile" style={{ color: "rgba(106, 64, 41, 1)", fontFamily: "Rubik", paddingLeft: "19%" }}>Promo Today</h3>
                            <h6 className="desc"
                                style={{ color: "black", fontSize: "14px", fontFamily: "Rubik", paddingTop: "5%", paddingLeft: "10%" }}>
                                Coupons will be updated every weeks.</h6>
                            <h6 className="desc"
                                style={{ color: "black", fontSize: "14px", fontFamily: "Rubik", paddingBottom: "5%", paddingLeft: "25%" }}>
                                Check them out!</h6>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(136, 183, 136, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={mothersImg} className="img-fluid rounded-start" style={{ paddingTop: "10%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik" }}>HAPPY MOTHER’S DAY!</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Get one of our
                                                favorite menu for
                                                free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(245, 195, 97, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={sundayImg} className="img-fluid rounded-start" style={{ paddingTop: "8%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik", paddingTop: "2%" }}>Get a cup of coffee
                                                for free on sunday morning</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Only at 7 to 9 AM
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(136, 183, 136, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={mothersImg} className="img-fluid rounded-start" style={{ paddingTop: "8%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik" }}>HAPPY MOTHER’S DAY!</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Get one of our
                                                favorite menu for
                                                free!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3" style={{ maxWidth: "80%", background: "rgba(197, 147, 120, 1)" }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={halloweenImg} className="img-fluid rounded-start" style={{ paddingTop: "8%" }} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h6 className="card-text" style={{ fontFamily: "Rubik" }}>HAPPY HALLOWEEN!</h6>
                                            <p className="card-text" style={{ fontFamily: "Rubik", fontSize: "14px" }}>Do you like chicken
                                                wings? Get 1 free only if you buy pinky promise</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn btn-lg"
                                style={{ width: "80%", marginBottom: "10%", background: "rgba(106, 64, 41, 1)", color: "white", borderRadius: "20px" }}>Apply Coupon</button>
                            <h6 style={{ fontFamily: "Rubik", paddingTop: "10%" }}>Terms and Condition</h6>
                            <p style={{ fontFamily: "Rubik" }}>1. You can only apply 1 coupon per day
                                <br />2. It only for dine in
                                <br />3. Buy 1 get 1 only for new user
                                <br />4. Should make member card to apply coupon</p>
                        </div>
                        <div className="col-sm-8" style={{ borderLeft: "1px rgba(159, 159, 159, 1)", width: "60%" }}>
                            <nav className="navbar" style={{ paddingLeft: "10%", width: "100%" }}>
                                <ul className="wrapper-menu-category">
                                    <li className={isFavorite === undefined ? 'active-menu' : null}>
                                        <Link to="/product/favorite">Favorite & Promo</Link>
                                    </li>
                                    <li className={categories === 'coffee' ? 'active-menu' : null}>
                                        <Link to="/product?categories=coffee">Coffee</Link>
                                    </li>
                                    <li className={categories === 'non coffee' ? 'active-menu' : null}>
                                        <Link to="/product?categories=non+coffee">Non Coffee</Link>
                                    </li>
                                    <li className={categories === 'food' ? 'active-menu' : null}>
                                        <Link to="/product?categories=food">Foods</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className="row row-cols-1 row-cols-md-4 g-3" style={{ paddingTop: "10%", maxWidth: "650px" }}>
                                {params.favorite === "favorite" ? isFavorite.map((product) => {
                                    return (
                                        <div className="col" style={{ marginLeft: "0%", marginRight: "0%", marginBottom: "30px" }}>
                                            <CardProduct
                                                id={product.id}
                                                pictures={`http://localhost:8000${product.pictures}`}
                                                name={product.name}
                                                price={product.price}
                                                key={product.id}
                                            />
                                        </div>
                                    );
                                })
                                    // : searchParams.get("name") === location.find.slice(6)
                                    //     ? find.map((product) => {
                                    //         return (
                                    //             <CardProduct
                                    //                 id={product.id}
                                    //                 pictures={`http://localhost:8000${product.pictures}`}
                                    //                 name={product.name}
                                    //                 price={product.price}
                                    //                 key={product.id}
                                    //             />
                                    //         );
                                    //     })
                                    : searchParams.get("categories") === "coffee" ? isCoffee.map((product) => {
                                        return (
                                            <CardProduct
                                                id={product.id}
                                                pictures={`http://localhost:8000${product.pictures}`}
                                                name={product.name}
                                                price={product.price}
                                                key={product.id}
                                            />
                                        );
                                    })
                                        : searchParams.get("categories") === "non coffee" ? isNonCoffee.map((product) => {
                                            return (
                                                <CardProduct
                                                    id={product.id}
                                                    pictures={`http://localhost:8000${product.pictures}`}
                                                    name={product.name}
                                                    price={product.price}
                                                    key={product.id}
                                                />
                                            );
                                        })
                                            : searchParams.get("categories") === "food" ? isFood.map((product) => {
                                                return (
                                                    <CardProduct
                                                        id={product.id}
                                                        pictures={`http://localhost:8000${product.pictures}`}
                                                        name={product.name}
                                                        price={product.price}
                                                        key={product.id}
                                                    />
                                                );
                                            })
                                                : allProduct.map((product) => {
                                                    return (
                                                        <CardProduct
                                                            id={product.id}
                                                            pictures={`http://localhost:8000${product.pictures}`}
                                                            name={product.name}
                                                            price={product.price}
                                                            key={product.id}
                                                        />
                                                    );
                                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default withLocation(withSearchParams(withParams(Product)));