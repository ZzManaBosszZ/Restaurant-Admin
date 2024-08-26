import Layout from "../../layouts";
import BreadCrumb from "../../layouts/BreadCrumb";
import { useParams, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import '../../../css/animated-masonry-gallery.css'
import Swal from "sweetalert2";
import config from "../../../config";

function MenuDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [menuCheck, setMenuCheck] = useState({});
	const [foodItems, setFoodItems] = useState({ food: [] }); // Initialize as an object with a foods array

	//check MenuFood is exist or not
	const checkMenuFood = useCallback(async () => {
		try {
			const menuCheckRequest = await api.get(url.MENU.DETAIL.replace("{}", id), {
				headers: { Authorization: `Bearer ${getAccessToken()}` }
			});
			const menuData = menuCheckRequest.data.data;
			setMenuCheck(menuData);

			if (!menuData.menuFoodIds || menuData.menuFoodIds.length === 0) {
				Swal.fire({
					title: 'No Food on this Menu',
					text: 'There are no menu food items. Would you like to add some?',
					icon: 'warning',
					showCancelButton: true,
					confirmButtonText: 'Yes, add food',
					cancelButtonText: 'No, add later'
				}).then((result) => {
					if (result.isConfirmed) {
						navigate(config.routes.menu_food_create);
					} else {
						navigate(config.routes.menu);
					}
				});
				return; // Prevent further rendering if no food items exist
			} else {
				// Load food items if menuFoodIds exist
				loadFoodItems(menuData.menuFoodIds);
			}

		} catch (error) {
			console.error("Error fetching menu details:", error);
		}
	}, [id, navigate]);

	const loadFoodItems = async (menuFoodIds) => {
		try {
			const requests = menuFoodIds.map(menuFoodId =>
				api.get(url.MENU_FOOD.DETAIL.replace("{}", menuFoodId), {
					headers: { Authorization: `Bearer ${getAccessToken()}` }
				})
			);
			const responses = await Promise.all(requests);
			const foodData = responses.map(response => response.data.data);
			setFoodItems({ food: foodData }); // Set the foods property inside the object
		} catch (error) {
			console.error("Error fetching food items:", error);
		}
	};

	useEffect(() => {
		checkMenuFood();
	}, [checkMenuFood]);

	foodItems.food.forEach((item) => {
		item.food.forEach((food) => {
			console.log(food.image); // Truy cập thuộc tính image
		});
	});


	return (
		<Layout>
			<BreadCrumb title="Menu Detail" />
			<section className="content">
				{foodItems.food && foodItems.food.length > 0 ? (
					<div id="gallery">
						<div className="box bg-transparent no-shadow b-0">
							<div className="box-body text-center p-0">
								<div className="btn-group">
									<button className="btn btn-info" id="filter-all">All</button>
									<button className="btn btn-info" id="filter-studio">Studio</button>
									<button className="btn btn-info" id="filter-landscape">Landscapes</button>
								</div>
							</div>
						</div>
						<div className="box bg-transparent no-shadow b-0">
							<div className="box-body">
								<h3 className="text-center">{menuCheck.name}</h3>
								<div id="gallery-content">
									<div id="gallery-content-center">
										{foodItems.food.map((item, index) => (
											item.food.map((food) => (
												// eslint-disable-next-line jsx-a11y/anchor-is-valid
												<a
													key={food.id}
													data-gallery="multiimages"
													data-title={food.name}
												>
													<img src={food.image} alt={food.name} />
												</a>
											))
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				) : (
					<p>No menu food items available. Please add some.</p>
				)}
			</section>
		</Layout>
	)
}

export default MenuDetail;
