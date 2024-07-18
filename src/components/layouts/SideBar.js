function SideBar() {
    return ( 
        <aside class="main-sidebar">
    <section class="sidebar position-relative">	
	  <div class="multinav">
		  <div class="multinav-scroll" style={{height: "100%"}}>	
			  <ul class="sidebar-menu" data-widget="tree">
				<li>
				  <a href="index.html">
					<i class="icon-Home"></i>
					<span>Dashboard</span>
				  </a>
				</li>
				<li class="treeview">
				  <a href="#">
					<i class="icon-Clipboard-check"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>
					<span>Order</span>
					<span class="pull-right-container">
					  {/* <i class="fa fa-angle-right pull-right"></i> */}
					  <i class="fa fa-solid fa-angle-right"></i>
					</span>
				  </a>
				  <ul class="treeview-menu">
					<li><a href="order.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Order List</a></li>
					<li><a href="order_details.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Order Details</a></li>
				  </ul>
				</li>
				<li class="treeview">
				  <a href="#">
					<i class="icon-Dinner"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>
					<span>Menus</span>
					<span class="pull-right-container">
					  <i class="fa fa-angle-right pull-right"></i>
					</span>
				  </a>
				  <ul class="treeview-menu">
					<li><a href="add_new_menu.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Add New Menu</a></li>
					<li><a href="menu_list.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Menu List</a></li>
					<li><a href="menu_categories.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Categories</a></li>
				  </ul>
				</li>
				<li class="treeview">
				  <a href="#">
					<i class="icon-Group"><span class="path1"></span><span class="path2"></span></i>
					<span>Customer</span>
					<span class="pull-right-container">
					  <i class="fa fa-angle-right pull-right"></i>
					</span>
				  </a>
				  <ul class="treeview-menu">
					<li><a href="add_new_menu.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Customer</a></li>
					<li><a href="members.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Members</a></li>
				  </ul>
				</li>
				<li>
				  <a href="analysis.html">
				  <i class="icon-Dinner"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></i>
					<span>Food</span>
				  </a>
				</li>
				<li class="treeview">
				  <a href="#">
					<i class="icon-Cart"><span class="path1"></span><span class="path2"></span></i>
					<span>Online Store</span>
					<span class="pull-right-container">
					  <i class="fa fa-angle-right pull-right"></i>
					</span>
				  </a>
				  <ul class="treeview-menu">
					<li><a href="ecommerce_products.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Products</a></li>
					<li><a href="ecommerce_cart.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Products Cart</a></li>
					<li><a href="ecommerce_products_edit.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Products Edit</a></li>
					<li><a href="ecommerce_details.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Product Details</a></li>
					<li><a href="ecommerce_orders.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Product Orders</a></li>
					<li><a href="ecommerce_checkout.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Products Checkout</a></li>
					<li><a href="invoice.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Invoice</a></li>
					<li><a href="invoicelist.html"><i class="icon-Commit"><span class="path1"></span><span class="path2"></span></i>Invoice List</a></li>	
				  </ul>
				</li>					     
			  </ul>	
			  <div class="sidebar-widgets">
				  <div class="mx-20 mb-25 pb-20 side-bx bg-primary bg-food-dark rounded20">
					<div class="text-center">
						<img src="../images/res-menu.png" class="sideimg" alt=""/>
						<h3 class="title-bx">Add Menu</h3>
						<a href="#" class="text-white py-10 font-size-16 mb-0">
							Manage Your food and beverages menu
						</a>
					</div>
				  </div>
				<div class="copyright text-left m-25">
					<p><strong class="d-block">Restran Admin Dashboard</strong> © 2024 All Rights Reserved</p>
				</div>
			  </div>
			</div>
		</div>
    </section>
  </aside>
     );
}

export default SideBar;