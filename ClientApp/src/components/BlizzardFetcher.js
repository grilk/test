import React, { Component } from 'react';
const url = 'https://us.api.battle.net/wow/boss/?locale=en_US&apikey=4vb48bnnfazwve7gsy7ttgukavur86hf'

export class BlizzardFetcher extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        fetch(url)
            .then((Response) => Response.json())
            .then((findresponse) => {
                console.log(findresponse.bosses);
                this.setState({
                    data: findresponse.bosses
                })
            })
    }
    render() {
        return (
            <div>
                {
                    //this.state.data.map((bosses) =>
                    //        <li key={bosses.id}>
                    //    {bosses.name}
                    //    </li>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(bosses =>
                                <tr key={bosses.id}>
                                    <td>{bosses.name}</td>
                                    <td>{bosses.description}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                }
            </div>
        )
    }



}