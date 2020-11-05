import React from 'react'

export default function DiaLogEdit(props: Props) {
    return (
        <div className="fullScreenDialog" style={{ visibility: props.show ? "visible" : "hidden" }}>
            <div className="model-edit" id="model-edit">
                <div className="showTemplateProduct">
                    <div className="frame-product-all">
                        <div className="khungSanPham">
                            <div className="hinhAnhSanPham">
                                <img id='{0}' src={props.image} alt="" />
                            </div>
                            <h3 className="tenSanPham" id='{1}' >{props.name}</h3>
                            <p className="giaSauKhiGiam" id='{2}'>
                                {new Intl.NumberFormat("de-DE", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(props.price - props.price * props.discount / 100)}</p>
                            <div className="phanTramGiam" id='{3}'>{props.discount} %</div>
                        </div>
                    </div>
                </div>
                <div className="bnt-edit">
                    <button onClick={(event) => props.edit(
                        props.id, props.image, props.name, props.price, props.discount
                    )}>
                        Edit Product</button>
                    <button onClick={props.close}>Cancel</button>
                    <button >Delete Product</button>
                </div>
                <div className="selectType">
                    <select id="typeProduct">
                        <option value="phone" selected>Phone</option>
                        <option value="laptop">Laptop</option>
                        <option value="support">Support</option>
                    </select>
                </div>
                <input type="text" placeholder="Link hình ảnh" id="img" value={props.image} onChange={props.changeImage} />
                <label htmlFor="img" className="error" />
                <input type="text" placeholder="Tên sản phẩm" id="name" value={props.name} onChange={props.changeName} />
                <label htmlFor="name" className="error" />
                <input type="number" placeholder="Giá gốc" id="gg" value={props.price} onChange={props.changePrice} />
                <label htmlFor="gg" className="error" />
                <input type="number" placeholder="Phần trăm giảm giá" id="sale" value={props.discount} onChange={props.changeDiscount} />
                <label htmlFor="sale" className="error" />
                <input type="text" placeholder="Khu vực bán" id="pl" value="Ha Noi" />
                <label htmlFor="pl" className="error" />
            </div>
        </div>

    )
}
interface Props {
    show: boolean;
    close(): void;
    image: string;
    name: string;
    price: number;
    discount: number;
    id: string;
    edit(
        id: string,
        img: string,
        name: string,
        price: number,
        discount: number
    ): void;

    changeImage(event: any): void;
    changeName(event: any): void;
    changePrice(event: any): void;
    changeDiscount(event: any): void;
}