angular.module('templates-main', ['../development/controllers/dashboard/dashboard.tpl.html', '../development/controllers/footer/footer.tpl.html', '../development/controllers/header/header.tpl.html', '../development/controllers/loading/loading.tpl.html', '../development/controllers/login/login.tpl.html', '../development/controllers/page/page.tpl.html', '../development/controllers/search/search.tpl.html', '../development/controllers/sidebar/sidebar.tpl.html']);

angular.module("../development/controllers/dashboard/dashboard.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/dashboard/dashboard.tpl.html",
    "<div id=\"dashboard-page\" class=\"page\">\n" +
    "\n" +
    "	<div class=\"alert alert-info alert-page\">\n" +
    "		<span class=\"strong\">Dashboard: </span>\n" +
    "		<span>View additional information, and navigate between your default partners.</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"user-partner-row row\">\n" +
    "		<div class=\"col-xs-6 col-md-2\" ng-repeat=\"partner in userPartners\">\n" +
    "			<a ng-click=\"partnerClicked(partner, $event)\" href=\"javascript:void(0)\" class=\"thumbnail\">\n" +
    "				<img ng-src=\"/images/partners/{{partner.id}}.jpg\" alt=\"...\">\n" +
    "				<div class=\"ellipsis\">{{partner.partnerName}}</div>\n" +
    "			</a>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"more-content\" ng-if=\"selectedPartner !== null\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">{{selectedPartner.partnerName}} · Description</h3>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"panel-body\">\n" +
    "				<span ng-if=\"selectedPartner.description !== undefined\">{{selectedPartner.description}}</span>\n" +
    "				<span ng-if=\"selectedPartner.description === undefined\">\n" +
    "					<div class=\"alert alert-danger\"><strong>Uh Oh: </strong> It looks like this partner does not have a description.</div>\n" +
    "				</span>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"panel panel-default\" ng-if=\"selectedPartner.bookmarks.length > 0\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">{{selectedPartner.partnerName}} · Bookmarks</h3>\n" +
    "			</div>\n" +
    "\n" +
    "			<table class=\"table table-hover\">\n" +
    "				<tbody>\n" +
    "					<tr class=\"hover\" ng-repeat=\"bookmark in selectedPartner.bookmarks\">\n" +
    "						<td>{{bookmark.name}}</td>\n" +
    "					</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"panel panel-default\" ng-if=\"selectedPartner.announcements.length > 0\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">{{selectedPartner.partnerName}} · Announcements</h3>\n" +
    "			</div>\n" +
    "\n" +
    "			<table class=\"table table-hover\">\n" +
    "				<tbody>\n" +
    "					<tr class=\"hover\" ng-repeat=\"announcement in selectedPartner.announcements\">\n" +
    "						<td>{{announcement.title}}</td>\n" +
    "					</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("../development/controllers/footer/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/footer/footer.tpl.html",
    "<ul>\n" +
    "	<li>\n" +
    "		<a href=\"#/dashboard/\">Home Page</a>\n" +
    "	</li>\n" +
    "	<li>·</li>\n" +
    "	<li>\n" +
    "		<a href=\"javascript:void(0)\">Announcements</a>\n" +
    "	</li>\n" +
    "	<li>·</li>\n" +
    "	<li>\n" +
    "		<a href=\"javascript:void(0)\">Provider Lookup</a>\n" +
    "	</li>\n" +
    "	<li>·</li>\n" +
    "	<li>\n" +
    "		<a href=\"javascript:void(0)\">Help & Support</a>\n" +
    "	</li>\n" +
    "	<li>·</li>\n" +
    "	<li>\n" +
    "		<a href=\"javascript:void(0)\">All Partners</a>\n" +
    "	</li>\n" +
    "</ul>\n" +
    "<div class=\"clear\"></div>");
}]);

angular.module("../development/controllers/header/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/header/header.tpl.html",
    "<div class=\"logo-wrapper\">\n" +
    "	<img src=\"images/logo.png\" />\n" +
    "	<div class=\"addon\">Roadside Services</div>\n" +
    "	<div class=\"logo-title\">Online Reference System</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"pull-right\">\n" +
    "	<div class=\"navbar navbar-default\">\n" +
    "		<div class=\"container-fluid\">\n" +
    "			<ul class=\"nav navbar-nav\">\n" +
    "				<li>\n" +
    "					<a href=\"#/dashboard/\">Home Page</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"javascript:void(0)\">Announcements</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"javascript:void(0)\">Provider Lookup</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"javascript:void(0)\">Help & Support</a>\n" +
    "				</li>\n" +
    "				<li>\n" +
    "					<a href=\"javascript:void(0)\">All Partners</a>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"clearfix\"></div>");
}]);

angular.module("../development/controllers/loading/loading.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/loading/loading.tpl.html",
    "<div class=\"overlay\"></div>\n" +
    "<div class=\"progress progress-striped active bar\">\n" +
    "	<div class=\"progress-bar\"  role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\"></div>\n" +
    "</div>");
}]);

angular.module("../development/controllers/login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/login/login.tpl.html",
    "\n" +
    "<div class=\"modal fade\" id=\"modal-need-help\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n" +
    "	<div class=\"modal-dialog modal-sm\">\n" +
    "		<div class=\"modal-content\">\n" +
    "			<div class=\"modal-header\">\n" +
    "				<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n" +
    "				<h4 class=\"modal-title\" id=\"myModalLabel\">Need Help Logging In?</h4>\n" +
    "			</div>\n" +
    "	\n" +
    "			<div class=\"modal-body\">\n" +
    "				<span>The Online Reference System for Roadside Services uses your SSO/MMA login credentials. If you have forgotten these credentials please</span>\n" +
    "				<a href=\"javascript:void(0)\">click here</a>\n" +
    "				<span>.</span>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"modal-footer\">\n" +
    "				<button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div id=\"login-page\" class=\"page\">\n" +
    "	<div class=\"pull-left left-container\">\n" +
    "		<div class=\"login-wrapper\">\n" +
    "			<div class=\"wrapper\">\n" +
    "				<form ng-submit=\"validateLogin()\">\n" +
    "					<div ng-if=\"error.found\" ng-bind=\"error.message\" class=\"alert alert-danger\"></div>\n" +
    "					\n" +
    "					<table>\n" +
    "						<tbody>\n" +
    "							<tr>\n" +
    "								<td>\n" +
    "									<label for=\"username\">Username:</label>\n" +
    "								</td>\n" +
    "								<td>\n" +
    "									<div>\n" +
    "										<input ng-model=\"username\" id=\"username\" type=\"text\" name=\"username\" class=\"form-control\" />\n" +
    "									</div>\n" +
    "								</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>\n" +
    "									<label for=\"password\">Password:</label>\n" +
    "								</td>\n" +
    "								<td>\n" +
    "									<div>\n" +
    "										<input ng-model=\"password\" id=\"password\" type=\"password\" name=\"password\" class=\"form-control\" />\n" +
    "									</div>\n" +
    "								</td>\n" +
    "							</tr>\n" +
    "							<tr>\n" +
    "								<td>\n" +
    "									<a href=\"javascript:void(0)\" ng-click=\"help()\"> Need Help?</a>\n" +
    "								</td>\n" +
    "								<td>\n" +
    "									<button id=\"login-button\" class=\"btn btn-primary\" type=\"submit\">Login</button>\n" +
    "									<div class=\"clearfix\"></div>\n" +
    "								</td>\n" +
    "							</tr>\n" +
    "						</tbody>\n" +
    "					</table>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"pull-right right-container\">\n" +
    "		<img src=\"images/home.png\" />\n" +
    "\n" +
    "		<div class=\"panels\">\n" +
    "			<div class=\"panel panel-default\">\n" +
    "				<div class=\"panel-heading\">\n" +
    "					<h3 class=\"panel-title\">Our Company</h3>\n" +
    "				</div>\n" +
    "				<div class=\"panel-body\">Allstate Roadside Services emerged from the acquisition by Allstate Corporation of the Partnership Marketing Group (PMG) in 2008, integrating them with Allstate Motor Club, one of the nation’s top motor clubs with 50 years of roadside expertise. </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"panel panel-default\">\n" +
    "				<div class=\"panel-heading\">\n" +
    "					<h3 class=\"panel-title\">Our People</h3>\n" +
    "				</div>\n" +
    "				<div class=\"panel-body\">The Allstate Roadside Services commitment is supported by more than 2000 professionals. We attract the best and brightest in the roadside arena through our industry-focused training methodologies, opportunities for advancement, and personal recognition programs. </div>\n" +
    "			</div>\n" +
    "\n" +
    "			<div class=\"panel panel-default last-panel\">\n" +
    "				<div class=\"panel-heading\">\n" +
    "					<h3 class=\"panel-title\">Our Partners</h3>\n" +
    "				</div>\n" +
    "				<div class=\"panel-body\">Our partnership focus helps us create customized solutions for numerous corporate clients with tens of millions of customers. We offer our partners innovative ways to build brand equity and increase customer loyalty through our differentiated service levels and exclusive program options. We proudly serve leading companies across a broad spectrum of industries, including vehicle manufacturers (OEMs), fleet and vehicle rental corporations, mobile/GPS providers, insurance companies, association and affinity groups, auto clubs, and credit card providers. </div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"clearfix\">\n" +
    "\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"clear\"></div>\n" +
    "\n" +
    "");
}]);

angular.module("../development/controllers/page/page.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/page/page.tpl.html",
    "<div id=\"page-page\" class=\"page\">\n" +
    "	<div ng-if=\"type === 'welcome'\">\n" +
    "		<div class=\"alert alert-info alert-page\">\n" +
    "			<span class=\"strong\">{{partnerName}} Dashboard</span>\n" +
    "			<span> </span>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"well\">\n" +
    "			<img ng-src=\"images/partners-welcome/{{partnerId}}.jpg\" width=\"605\"/>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"well\">\n" +
    "			<p>{{partnerDescription}}</p>\n" +
    "		</div>\n" +
    "\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-heading\">\n" +
    "				<h3 class=\"panel-title\">More Details</h3>\n" +
    "			</div>\n" +
    "\n" +
    "			<table class=\"table table-hover\">\n" +
    "				<tbody>\n" +
    "					<tr ng-repeat=\"page in primaryPageList\" class=\"hover\">\n" +
    "						<td>{{page.primaryNavName}}</td>\n" +
    "					</tr>\n" +
    "				</tbody>\n" +
    "			</table>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("../development/controllers/search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/search/search.tpl.html",
    "<div id=\"search-page\" class=\"page\">\n" +
    "	<div class=\"alert alert-info alert-page\">\n" +
    "		<span class=\"strong\">Search </span>\n" +
    "		<span class=\"hide\">{{query}}</span>\n" +
    "		<span class=\"hide\" ng-if=\"partnerName\">{{' · '+partnerName}}</span>\n" +
    "	</div>\n" +
    "\n" +
    "	<div class=\"list-group\" ng-repeat=\"result in results\">\n" +
    "		<a target=\"_blank\" ng-href=\"{{result.reference}}\" class=\"list-group-item\">\n" +
    "			<h4 class=\"list-group-item-heading\">{{result.title}}</h4>\n" +
    "			<p class=\"list-group-item-text\">{{result.summary}}</p>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "\n" +
    "</div>");
}]);

angular.module("../development/controllers/sidebar/sidebar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../development/controllers/sidebar/sidebar.tpl.html",
    "<div id=\"side-search\", class=\"well\">\n" +
    "	<div class=\"alert alert-danger\" ng-if=\"searchError === true\">Atleast one field is required.</div>\n" +
    "	<form autocomplete=\"off\">\n" +
    "		<table>\n" +
    "			<tbody>\n" +
    "				<tr>\n" +
    "					<td class=\"first-child\">\n" +
    "						<label for=\"search-partners\">Partner:</label>\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<select id=\"search-partners\" name=\"partner\">\n" +
    "							<option index=\"0\" value=\"\">Choose a Partner</option>\n" +
    "							<option value=\"{{partner.partnerName | orderBy:'index'}}\" ng-repeat=\"partner in allPartners | orderBy:'partnerName'\">{{partner.partnerName}}</option>\n" +
    "						</select>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>\n" +
    "						<label for=\"search-topic\">Topic:</label>\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<select id=\"search-topic\" name=\"partner\">\n" +
    "							<option index=\"0\" value=\"\">Choose a Topic</option>\n" +
    "							<option value=\"Program Overview\">Program Overview</option>\n" +
    "							<option value=\"Benefits and Services\">Benefits and Services</option>\n" +
    "						</select>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td>\n" +
    "						<label for=\"search-input\"> Search:</label>\n" +
    "					</td>\n" +
    "					<td>\n" +
    "						<div class=\"form-group has-feedback\">\n" +
    "							<input autocomplete=\"off\"  id=\"search-input\" class=\"form-control\" type=\"text\" name=\"query\" />\n" +
    "						</div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "				<tr>\n" +
    "					<td colspan=\"2\">\n" +
    "						<button class=\"btn btn-primary\" type=\"submit\" ng-click=\"search()\">Search</button>\n" +
    "						<div class=\"clear\"></div>\n" +
    "					</td>\n" +
    "				</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	</form>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div id=\"side-announcement\" class=\"well\">\n" +
    "	<h4>Global Announcements</h4>\n" +
    "	<ol>\n" +
    "		<li>\n" +
    "			<a class=\"text\" href=\"javascript:void(0)\">Welcome to the new reference system.</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a class=\"text\" href=\"javascript:void(0)\">This will be the greatest site ever guaranteed.</a>\n" +
    "		</li>\n" +
    "		<li>\n" +
    "			<a class=\"text\" href=\"javascript:void(0)\">Tutorial video for new navigation.</a>\n" +
    "		</li>\n" +
    "	</ol>\n" +
    "	<a href=\"javascript:void(0)\" class=\"more\"> - More Announcements</a>\n" +
    "	<div class=\"clear\"></div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<div id=\"side-partners\" class=\"well\" ng-if=\"userPartners.length > 0\">\n" +
    "	<h4>\n" +
    "		<span>Default Partners · </span>\n" +
    "		<a ng-click=\"showModal()\" class=\"weak\" href=\"javascript:void(0)\"> Edit</a>\n" +
    "	</h4>\n" +
    "\n" +
    "	<ul>\n" +
    "		<li class=\"partner\" ng-repeat=\"partner in userPartners\">\n" +
    "			<div ng-click=\"partnerTriangleClicked(userPartners, partner, $event)\" class=\"triangle-wrapper\">\n" +
    "				<div class=\"level1 closed\"></div>\n" +
    "			</div>\n" +
    "			<a ng-if=\"partner.pageId !== null\" ng-href=\"{{'#/page/' + partner.pageId + '/'}}\" class=\"text\">{{partner.partnerName}}</a>\n" +
    "			<a ng-if=\"partner.pageId === null\" href=\"javascript:void(0)\" class=\"text\">{{partner.partnerName}}</a>\n" +
    "			<div class=\"clear\"></div>\n" +
    "\n" +
    "\n" +
    "			<div class=\"primaryNavigations\">\n" +
    "				<ol class=\"primaryOl\">\n" +
    "					<li class=\"primaryNav\" ng-repeat=\"primaryNavigation in partner.primaryNavigations\">\n" +
    "						<a href=\"javascript:void(0)\" class=\"text\">{{primaryNavigation.primaryNavName}}</a>\n" +
    "					</li>\n" +
    "				</ol>\n" +
    "			</div>\n" +
    "\n" +
    "		</li>\n" +
    "	</ul>\n" +
    "</div>\n" +
    "\n" +
    "<div id=\"partners-modal\">\n" +
    "	<div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"data-controls-modal=\"modal-loading\" data-backdrop=\"static\" data-keyboard=\"false\">\n" +
    "		<div class=\"modal-dialog\">\n" +
    "			<div class=\"modal-content\">\n" +
    "				<div class=\"modal-header\">\n" +
    "					<button type=\"button\" class=\"close\" aria-hidden=\"true\" ng-click=\"submit()\">&times;</button>\n" +
    "					<h4 class=\"modal-title\" id=\"myModalLabel\">Select one to five default partners.</h4>\n" +
    "				</div>\n" +
    "		\n" +
    "				<div class=\"modal-body\">\n" +
    "\n" +
    "\n" +
    "\n" +
    "					<div id=\"modal-all-partners\" class=\"radio-wrapper\">\n" +
    "						<div class=\"alert\" ng-class=\"(userPartners.length === 0 || userPartners.length > 5) ? 'alert-danger' : 'alert-info'\">Please select one to five default partners.</div>\n" +
    "\n" +
    "						<div class=\"panel panel-default\">\n" +
    "							<div class=\"panel-heading\">\n" +
    "								<h3 class=\"panel-title\">Select & Deselect Partners</h3>\n" +
    "							</div>\n" +
    "\n" +
    "							<div class=\"panel-body\">\n" +
    "								<div ng-repeat=\"partner in allPartners | orderBy:'partnerName'\" class=\"each ellipsis\">\n" +
    "									<input id=\"{{partner.id}}\" type=\"checkbox\" ng-click=\"partnerClicked(partner, $event)\" />\n" +
    "									<label for=\"{{partner.id}}\">{{partner.partnerName}}</label>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "					<div class=\"order-wrapper\" ng-class=\"(userPartners.length > 0) ? '' : 'hide'\">\n" +
    "\n" +
    "						<div class=\"panel panel-default\">\n" +
    "							<div class=\"panel-heading\">\n" +
    "								<h3 class=\"panel-title\">Drag & Drop Partners For Prioritization</h3>\n" +
    "							</div>\n" +
    "\n" +
    "							<table id=\"sort\" class=\"table table-hover\">\n" +
    "								<tbody>\n" +
    "									<tr data-id=\"{{partner.id}}\" ng-repeat=\"partner in userPartners\">\n" +
    "										<td>{{partner.partnerName}}</td>\n" +
    "									</tr>\n" +
    "								</tbody>\n" +
    "							</table>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "\n" +
    "\n" +
    "					\n" +
    "				</div>\n" +
    "\n" +
    "				<div class=\"modal-footer\">\n" +
    "					<button ng-class=\"(userPartners.length > 0 && userPartners.length < 6) ? 'btn-primary' : 'disabled'\" type=\"button\" class=\"btn\" ng-click=\"submit()\">Add Partners</button>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "");
}]);
