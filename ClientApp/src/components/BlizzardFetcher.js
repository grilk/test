import React, { Component } from 'react';
const url = 'https://eu.api.battle.net/wow/realm/status?locale=en_GB&apikey=4vb48bnnfazwve7gsy7ttgukavur86hf'

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
                this.setState({
                    data: findresponse.realms
                })
            })
    }
    render() {
        return (
            <div>
                {
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Population</th>
                                <th>Queue</th>
                                <th>Status</th>
                                <th>Battlegroup</th>
                                <th>Timezone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(realm =>
                                <tr key={realm.slug}>
                                    <td>{realm.name}</td>
                                    <td>{realm.type}</td>
                                    <td>{realm.population}</td>
                                    <td>{realm.queue.toString()}</td>
                                    <td>{realm.status.toString()}</td>
                                    <td>{realm.battlegroup}</td>
                                    <td>{realm.timezone}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                }
            </div>
        )
    }
}