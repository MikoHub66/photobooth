// Edit these, then commit — the share page picks them up immediately.
window.BOOTH = {
  cloudName: 'pvyn7mbw',                 // Cloudinary cloud name (same as in the booth app)
  cloudFolder: 'rustyrose-booth',        // must match "Cloud folder" in the booth app
  keepDays: 90,                          // must match "Keep photos online (days)" in the booth app
  homeDays: 2,                           // the home page (the address on the slideshow) lists events from the last this-many days

  business: 'RustyRose Photography',
  photographer: 'Heidi',
  website: 'https://rustyrosephotography.com',
  bookUrl: 'https://rustyrosephotography.com',   // contact / booking page if you have a direct link
  facebook: 'https://facebook.com/RustyRosePhotos',
  instagram: 'https://www.instagram.com/rustyrose.photography/',
  instagramHandle: '@rustyrose.photography', // tagged in the caption
  facebookHandle: '@RustyRosePhotos',        // tagged in the caption

  // Caption guests get with their photo.
  // {event} = the event title from the booth (card title), {instagram} / {facebook} = the handles above, {tags} = hashtags below.
  caption: 'Had a great time at {event}! 🎉 Thank you {instagram} {facebook} for the awesome photo booth! 📸\n\n{tags}',
  captionNoEvent: 'Had a great time today! 🎉 Thank you {instagram} {facebook} for the awesome photo booth! 📸\n\n{tags}',
  hashtags: ['#ToledoPhotoBooth', '#ToledoPhotographer', '#AnnArborPhotographer', '#NWOhio']
};
