// import

export interface Product {      // rename
  id:           string;
  name:         string;
  slug:         string;
  image:        string;      // String
  images:       string[];
  department:   string;
  promotion:    string[];     // (start & end dates)
  description:  string[];    // string
  price:        number;      // Discounted price & percentage
  rating:       number;
  category:     string;
  sub_category: string
}
