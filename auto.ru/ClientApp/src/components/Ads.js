import React, { Component } from 'react';

export class Ads extends Component {
    static displayName = Ads.name;

    constructor(props) {
        super(props);
        this.state = { ads: [], loading: true };
    }

    componentDidMount() {
        this.getAdsFromWebApi();
    }

    static renderAdsTable(ads) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Имя собственника</th>
                        <th>Телефон собственника</th>
                        <th>Модель</th>
                        <th>Марка</th>
                        <th>Пробег</th>
                        <th>Состояние</th>
                        <th>Дата объявления</th>
                        <th>Цена</th>
                        <th>Город</th>
                    </tr>
                </thead>
                <tbody>
                    {ads.map(ad =>
                        <tr key={ad.id}>
                            <td>{ad.id}</td>
                            <td>{ad.user.name}</td>
                            <td>{ad.user.phone}</td>
                            <td>{ad.car.name}</td>
                            <td>{ad.car.brand.name}</td>
                            <td>{ad.run}</td>
                            <td>{ad.condition}</td>
                            <td>{ad.adDate}</td>
                            <td>{ad.price}</td>
                            <td>{ad.city.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Ads.renderAdsTable(this.state.ads);

        return (
            <div>
                <h1 id="tabelLabel" >Таблица объявлений</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async getAdsFromWebApi() {
        const response = await fetch('api/ads');
        const data = await response.json();
        this.setState({ ads: data, loading: false });
    }
}