export interface Product{
    id:             number;
    title:          String;
    price:          number;
    description:    String;
    category:       string;
    images:         String[];
    categoryId:     number;

}

export interface category{
    id:             number;
    name:           String;
    image:          string;
    
}