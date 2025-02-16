const popupVideo = () => {
  if (typeof window !== "undefined") {
    import("glightbox").then((module) => {
      let GLightbox = module.default;
      // glightbox Activation
      const customLightboxHTML = `<div id="glightbox-body" class="glightbox-container">
 <div class="gloader visible"></div>
 <div class="goverlay"></div>
 <div class="gcontainer">
 <div id="glightbox-slider" class="gslider"></div>
 <button class="gnext gbtn" tabindex="0" aria-label="Next" data-customattribute="example">{nextSVG}</button>
 <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>
 <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>
 </div>
 </div>`;
      GLightbox({
        touchNavigation: true,
        lightboxHTML: customLightboxHTML,
        loop: true,
      });
    });
  }
};

export default popupVideo;
