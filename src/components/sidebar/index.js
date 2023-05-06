import React from 'react'

function Sidebar() {
  return (
    <>
     <div className="slim-sidebar">
        <label className="sidebar-label">Navigation</label>

        <ul className="nav nav-sidebar">
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link"><i className="icon ion-ios-home-outline"></i> Dashboard</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="index.html" className="nav-sub-link">Dashboard 01</a></li>
              <li className="nav-sub-item"><a href="index2.html" className="nav-sub-link">Dashboard 02</a></li>
              <li className="nav-sub-item"><a href="index3.html" className="nav-sub-link">Dashboard 03</a></li>
              <li className="nav-sub-item"><a href="index4.html" className="nav-sub-link">Dashboard 04</a></li>
              <li className="nav-sub-item"><a href="index5.html" className="nav-sub-link">Dashboard 05</a></li>
            </ul>
          </li>
          <li className="sidebar-nav-item">
            <a href="page-messages.html" className="sidebar-nav-link"><i className="icon ion-ios-chatboxes-outline"></i> Messages</a>
          </li>
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link active"><i className="icon ion-ios-book-outline"></i> Pages</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="page-profile.html" className="nav-sub-link">Profile Page</a></li>
              <li className="nav-sub-item"><a href="page-invoice.html" className="nav-sub-link">Invoice</a></li>
              <li className="nav-sub-item"><a href="page-contact.html" className="nav-sub-link">Contact Manager</a></li>
              <li className="nav-sub-item"><a href="page-file-manager.html" className="nav-sub-link">File Manager</a></li>
              <li className="nav-sub-item"><a href="page-calendar.html" className="nav-sub-link active">Calendar</a></li>
              <li className="nav-sub-item"><a href="page-timeline.html" className="nav-sub-link">Timeline</a></li>
              <li className="nav-sub-item sub-with-sub">
                <a href="#" className="nav-sub-link">Pricing</a>
                <ul>
                  <li><a href="page-pricing.html">Pricing 01</a></li>
                  <li><a href="page-pricing2.html">Pricing 02</a></li>
                  <li><a href="page-pricing3.html">Pricing 03</a></li>
                </ul>
              </li>
              <li className="nav-sub-item sub-with-sub">
                <a href="page-signin.html" className="nav-sub-link">Sign In</a>
                <ul>
                  <li><a href="page-signin.html">Signin Simple</a></li>
                  <li><a href="page-signin2.html">Signin Split</a></li>
                </ul>
              </li>
              <li className="nav-sub-item sub-with-sub">
                <a href="page-signup.html" className="nav-sub-link">Sign Up</a>
                <ul>
                  <li><a href="page-signup.html">Signup Simple</a></li>
                  <li><a href="page-signup2.html">Signup Split</a></li>
                </ul>
              </li>
              <li className="nav-sub-item sub-with-sub">
                <a href="#" className="nav-sub-link">Error Pages</a>
                <ul>
                  <li><a href="page-404.html">404 Not Found</a></li>
                  <li><a href="page-505.html">505 Forbidden</a></li>
                  <li><a href="page-500.html">500 Internal Server</a></li>
                  <li><a href="page-503.html">503 Service Unavailable</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link"><i className="icon ion-ios-filing-outline"></i> UI Elements</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="elem-accordion.html" className="nav-sub-link">Accordion</a></li>
              <li className="nav-sub-item"><a href="elem-alerts.html" className="nav-sub-link">Alerts</a></li>
              <li className="nav-sub-item"><a href="elem-buttons.html" className="nav-sub-link">Buttons</a></li>
              <li className="nav-sub-item"><a href="elem-cards.html" className="nav-sub-link">Cards</a></li>
              <li className="nav-sub-item"><a href="elem-carousel.html" className="nav-sub-link">Carousel</a></li>
              <li className="nav-sub-item"><a href="elem-dropdowns.html" className="nav-sub-link">Dropdown</a></li>
              <li className="nav-sub-item"><a href="elem-icons.html" className="nav-sub-link">Icons</a></li>
              <li className="nav-sub-item"><a href="elem-images.html" className="nav-sub-link">Images</a></li>
              <li className="nav-sub-item"><a href="elem-lists.html" className="nav-sub-link">Lists</a></li>
              <li className="nav-sub-item"><a href="elem-modal.html" className="nav-sub-link">Modal</a></li>
              <li className="nav-sub-item"><a href="elem-media.html" className="nav-sub-link">Media Object</a></li>
              <li className="nav-sub-item"><a href="elem-navigation.html" className="nav-sub-link">Navigation</a></li>
              <li className="nav-sub-item"><a href="elem-pagination.html" className="nav-sub-link">Pagination</a></li>
              <li className="nav-sub-item"><a href="elem-tooltip.html" className="nav-sub-link">Tooltip</a></li>
              <li className="nav-sub-item"><a href="elem-popover.html" className="nav-sub-link">Popover</a></li>
              <li className="nav-sub-item"><a href="elem-progress.html" className="nav-sub-link">Progress</a></li>
              <li className="nav-sub-item"><a href="elem-spinner.html" className="nav-sub-link">Spinner</a></li>
              <li className="nav-sub-item"><a href="elem-typography.html" className="nav-sub-link">Typography</a></li>
            </ul>
          </li>
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link"><i className="icon ion-ios-analytics-outline"></i> Charts</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="chart-morris.html" className="nav-sub-link">Morris Charts</a></li>
              <li className="nav-sub-item"><a href="chart-flot.html" className="nav-sub-link">Flot Charts</a></li>
              <li className="nav-sub-item"><a href="chart-chartjs.html" className="nav-sub-link">ChartJS</a></li>
              <li className="nav-sub-item"><a href="chart-echarts.html" className="nav-sub-link">ECharts</a></li>
              <li className="nav-sub-item"><a href="chart-chartist.html" className="nav-sub-link">Chartist</a></li>
              <li className="nav-sub-item"><a href="chart-rickshaw.html" className="nav-sub-link">Rickshaw</a></li>
              <li className="nav-sub-item"><a href="chart-sparkline.html" className="nav-sub-link">Sparkline</a></li>
              <li className="nav-sub-item"><a href="chart-peity.html" className="nav-sub-link">Peity</a></li>
            </ul>
          </li>
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link"><i className="icon ion-ios-location-outline"></i> Maps</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="map-google.html" className="nav-sub-link">Google Maps</a></li>
              <li className="nav-sub-item"><a href="map-leaflet.html" className="nav-sub-link">Leaflet Maps</a></li>
              <li className="nav-sub-item"><a href="map-vector.html" className="nav-sub-link">Vector Maps</a></li>
            </ul>
          </li>
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link"><i className="icon ion-ios-gear-outline"></i> Forms</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="form-elements.html" className="nav-sub-link">Form Elements</a></li>
              <li className="nav-sub-item"><a href="form-layouts.html" className="nav-sub-link">Form Layouts</a></li>
              <li className="nav-sub-item"><a href="form-validation.html" className="nav-sub-link">Form Validation</a></li>
              <li className="nav-sub-item"><a href="form-wizards.html" className="nav-sub-link">Form Wizards</a></li>
              <li className="nav-sub-item"><a href="form-editor.html" className="nav-sub-link">WYSIWYG Editor</a></li>
              <li className="nav-sub-item"><a href="form-select2.html" className="nav-sub-link">Select2</a></li>
              <li className="nav-sub-item"><a href="form-rangeslider.html" className="nav-sub-link">Range Slider</a></li>
              <li className="nav-sub-item"><a href="form-datepicker.html" className="nav-sub-link">Datepicker</a></li>
            </ul>
          </li>
          <li className="sidebar-nav-item with-sub">
            <a href="#" className="sidebar-nav-link"><i className="icon ion-ios-information-outline"></i> Helper/Utilities</a>
            <ul className="nav sidebar-nav-sub">
              <li className="nav-sub-item"><a href="util-background.html" className="nav-sub-link">Background</a></li>
              <li className="nav-sub-item"><a href="util-border.html" className="nav-sub-link">Border</a></li>
              <li className="nav-sub-item"><a href="util-height.html" className="nav-sub-link">Height</a></li>
              <li className="nav-sub-item"><a href="util-margin.html" className="nav-sub-link">Margin</a></li>
              <li className="nav-sub-item"><a href="util-padding.html" className="nav-sub-link">Padding</a></li>
              <li className="nav-sub-item"><a href="util-position.html" className="nav-sub-link">Position</a></li>
              <li className="nav-sub-item"><a href="util-typography.html" className="nav-sub-link">Typography</a></li>
              <li className="nav-sub-item"><a href="util-width.html" className="nav-sub-link">Width</a></li>
            </ul>
          </li>
          <li className="sidebar-nav-item">
            <a href="widgets.html" className="sidebar-nav-link"><i className="icon ion-ios-lightbulb-outline"></i> Widgets</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar;
