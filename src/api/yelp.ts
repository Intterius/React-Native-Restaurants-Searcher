import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer AxQSo8pUG49kVxFE-GhMgUhwRP1LQ-s7dd7txnRfMW02Img7glYkJXLBPpH6sSZ6UUeuEGjXMyNeLqlvcNXiMHRMT6dp5DSxPHRh7tWipU9_ADgCTZwZILDZSp1hYnYx',
  },
});
