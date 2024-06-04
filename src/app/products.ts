export interface Products {
    id : string,
    p_model_no : string,
    p_name : string,
    p_img_path : string,
    p_price : string,
    p_seller_name : string,
    category : string
}
export interface Cart {
    id : string,
    p_model_no : string,
    p_name : string,
    p_img_path : string,
    p_price : string,
    p_seller_name : string,
    category : string,
    customer_Id:string
}
