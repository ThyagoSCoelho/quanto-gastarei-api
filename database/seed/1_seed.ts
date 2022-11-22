import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

type Car = {
    CarModel: string,
    CarYear: number,
    AutoCityGas: number,
    AutoCityAlc: number,
    AutoRoadGas: number,
    AutoRoadAlc: number

};

async function step1() {


    (() => {
        const csvFilePath = path.resolve(__dirname, 'data/Dados_Carros.csv');

        const headers = ['CarModel', 'CarYear', 'AutoCityGas', 'AutoCityAlc', 'AutoRoadGas' ,'AutoRoadAlc'];
        const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

        parse(fileContent, {
                delimiter: ';',
                columns: headers,
            }, (error, result: Car[]) => {
                if (error) {
                console.error(error);
                }

                console.log(result)
                
                let query = `INSERT INTO cars (modelo, ano, consumo_gas, consumo_gas_road, consumo_alc, consumo_alc_road) VALUES `;
                query += result.map(row => {
                    const value = `'${row.CarModel}', ${row.CarYear}, ${row.AutoCityGas}, ${row.AutoCityAlc}, ${row.AutoRoadGas}, ${row.AutoRoadAlc}`
                    return `(${ value })`
                }).filter(r => r).join(',');

                console.log(query)
        });

        
    })();
    
}

step1();