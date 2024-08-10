import config from "../../config";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, path }) =>  {
    return (
        <div class="content-header">
			<div class="d-flex align-items-center">
				<div class="mr-auto">
					<h3 class="page-title">{title}</h3>
					<div class="d-inline-block align-items-center">
						<nav>
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><Link to={path}><i class="icon-Home"></i></Link></li>
								<li class="breadcrumb-item" aria-current="page"> <Link to={path}>Home</Link></li>
								<li class="breadcrumb-item active" aria-current="page">{title}</li>
							</ol>
						</nav>
					</div>
				</div>				
			</div>
		</div>
    );
}

BreadCrumb.defaultProps = {
    path: config.routes.home,
};
export default BreadCrumb;