import data from '@/lib/data'
import { ConnectToDatabase } from '.'
import Product from './models/product.model'
import {cwd} from 'process'
import {loadEnvConfig} from '@next/env'

loadEnvConfig(cwd())

const main = async () => {
    try {
        const {products} = data
        await ConnectToDatabase(process.env.MONGODB_URI)

        await Product.deleteMany()
        const createdProducts = await Product.insertMany(products)
        console.log({
            createdProducts,
            message: "Database seeded successfully",
        })
        process.exit(0)
    } catch (error) {
        console.error("Error seeding database:", error) 
        throw new Error("Database seeding failed")    
        
    }
}

main()