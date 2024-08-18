import Layout from "../../../layouts";
import BreadCrumb from "../../../layouts/BreadCrumb";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { getAccessToken } from "../../../../utils/auth";

function FoodDetail() {

    const { id } = useParams();

    const hashCode = (str) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    };

    // Generate the product code based on the hashed ID
    const generateProductCode = (id) => {
        const hash = hashCode(id);
        const productNumber = hash % 1000000; // Ensure a 6-digit number
        return `FG${productNumber.toString().padStart(6, '0')}`;
    };

    const foodCode = generateProductCode(id);

    const [foodDetail, setFoodDetail] = useState({});

    const loadData = useCallback(async () => {
        try {
            const foodDetailRequest = await api.get(url.FOOD.DETAIL.replace("{}", id), { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            setFoodDetail(foodDetailRequest.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const stars = [];
    const roundedScore = Math.round(foodDetail.star * 2) / 2;
    const fullStars = Math.floor(roundedScore);
    const halfStar = roundedScore - fullStars === 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }
    if (halfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }


    return (
        <Layout>
            <BreadCrumb title="Food Detail" />
            <section class="content">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-4 col-sm-6">
                                        <div class="box box-body b-1 text-center no-shadow">
                                            <img src={foodDetail.image} id="product-image" class="img-fluid" alt="" />
                                        </div>
                                        <div class="pro-photos">
                                            <div class="photos-item item-active">
                                                <img src={foodDetail.image} alt="" />
                                            </div>
                                            <div class="photos-item">
                                                <img src="../images/product/product-7.png" alt="" />
                                            </div>
                                            <div class="photos-item">
                                                <img src="../images/product/product-8.png" alt="" />
                                            </div>
                                            <div class="photos-item">
                                                <img src="../images/product/product-9.png" alt="" />
                                            </div>
                                        </div>
                                        <div class="clear"></div>
                                    </div>
                                    <div class="col-md-8 col-sm-6">
                                        <h2 class="box-title mt-0">{foodDetail.name}</h2>
                                        <div class="list-inline">
                                            {stars}
                                        </div>
                                        <h1 class="pro-price mb-0 mt-20">&#36;{foodDetail.price}
                                            <span class="old-price">&#36;540</span>
                                            <span class="text-danger">50% off</span>
                                        </h1>
                                        <hr />
                                        <p>{foodDetail.description}</p>

                                        <hr />
                                        {/* <div class="gap-items">
                                            <button class="btn btn-success"><i class="mdi mdi-shopping"></i> Buy Now!</button>
                                            <button class="btn btn-primary"><i class="mdi mdi-cart-plus"></i> Add To Cart</button>
                                            <button class="btn btn-info"><i class="mdi mdi-compare"></i> Compare</button>
                                            <button class="btn btn-danger"><i class="mdi mdi-heart"></i> Wishlist</button>
                                        </div> */}
                                        <h4 class="box-title mt-20">Key Highlights</h4>
                                        <ul class="list-icons list-unstyled">
                                            <li><i class="fa fa-check text-danger float-none"></i> Party Wear</li>
                                            <li><i class="fa fa-check text-danger float-none"></i> Nam libero tempore, cum soluta nobis est</li>
                                            <li><i class="fa fa-check text-danger float-none"></i> Omnis voluptas as placeat facere possimus omnis voluptas.</li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h4 class="box-title mt-40">General Info</h4>
                                        <div class="table-responsive">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                        <td width="390">Brand</td>
                                                        <td> Brand Name </td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td>Delivery Condition</td>
                                                        <td> Lorem Ipsum </td>
                                                    </tr> */}
                                                    <tr>
                                                        <td>Type</td>
                                                        <td> Party Wear </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Style</td>
                                                        <td> Modern </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Product Number</td>
                                                        <td> {foodCode} </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    );
}

export default FoodDetail;