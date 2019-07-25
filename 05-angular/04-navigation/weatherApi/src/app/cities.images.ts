// orginize image links into a single object and export it to give components access
export const images = {
  Boise:
    'https://media.ktvb.com/assets/KTVB/images/531132730/531132730_750x422.jpg',
  Seattle:
    'data:image/jpeg;base64,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',
  'San Jose':
    'https://amp.businessinsider.com/images/5c743db82628986851436a36-750-563.jpg',
};
