import React from 'react'
import Layout from '../../layouts'
import BreadCrumb from '../../layouts/BreadCrumb'
import '../../../css/animated-masonry-gallery.css'
function MenuDetail() {
  return (
    <Layout>
        <BreadCrumb title="Menu Detail" />
        <section class="content">
		  <div id="gallery">
			  <div class="box bg-transparent no-shadow b-0">
				<div class="box-body text-center p-0">
					<div class="btn-group">
					  <button class="btn btn-info" id="filter-all">All</button>
					  <button class="btn btn-info" id="filter-studio">Studio</button>
					  <button class="btn btn-info" id="filter-landscape">Landscapes</button>
					</div>
				</div>
			  </div>
			  <div class="box bg-transparent no-shadow b-0">
				<div class="box-body">
                    <h3 class="text-center">Name of Menu</h3>
					<div id="gallery-content">
						<div id="gallery-content-center">
							<a href="../images/gallery/studio1.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio1.jpg" alt="gallery" class="all studio" /> </a>
							<a href="../images/gallery/landscape1.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape1.jpg" class="all landscape" alt="gallery" /> </a>
							<a href="../images/gallery/studio2.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio2.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/studio25.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio25.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/landscape2.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape2.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio27.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio27.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/studio3.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio3.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/landscape3.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape3.jpg" class="all landscape" alt="gallery" /> </a>
							<a href="../images/gallery/studio26.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio26.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/studio4.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio4.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/landscape4.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape4.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio5.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio5.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/landscape5.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape5.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio6.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio6.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape6.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape6.jpg" class="all landscape" alt="gallery" /> </a>
							<a href="../images/gallery/studio7.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio7.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape7.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape7.jpg" class="all landscape" alt="gallery" /> </a>
							<a href="../images/gallery/studio8.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio8.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape8.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape8.jpg" class="all landscape" alt="gallery" /> </a>
							<a href="../images/gallery/studio9.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio9.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape9.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape9.jpg" class="all landscape" alt="gallery" /> </a>
							<a href="../images/gallery/studio10.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio10.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape10.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape10.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio11.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio11.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape11.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape11.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio12.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio12.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape12.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape12.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio13.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio13.jpg" class="all studio" alt="gallery" /> </a>
							<a href="../images/gallery/landscape13.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape13.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio14.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio14.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape14.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape14.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio15.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio15.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape15.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape15.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio16.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio16.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape16.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape16.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio17.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio17.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape17.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape17.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio18.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio18.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/landscape18.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/landscape18.jpg" class="all landscape" alt="gallery" /></a>
							<a href="../images/gallery/studio19.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio19.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/studio20.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio20.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/studio21.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio21.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/studio22.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio22.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/studio23.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio23.jpg" class="all studio" alt="gallery" /></a>
							<a href="../images/gallery/studio24.jpg" data-toggle="lightbox" data-gallery="multiimages" data-title="Image title will be appear here"><img src="../images/gallery/studio24.jpg" class="all studio" alt="gallery" /></a>
						</div>
					</div>
					</div>
				</div>
		  </div>
		</section>
    </Layout>
  )
}

export default MenuDetail