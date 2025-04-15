import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { APP_NAME } from "@/lib/constants";

const categories = ['men', 'women', 'kids', 'accessories'];

export default function Search() {
    return (
        <form action='/search' method='get' className='flex items-stretch h-9'>
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
                    <SelectValue className="all" />
                </SelectTrigger>
                <SelectContent className="popper">
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input
                type='search'
                name='q'
                placeholder={`Search Site ${APP_NAME}`}
                className='flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full'
            />
            <button
                type="submit"
                className="flex items-center justify-center bg-primary text-primary-foreground rounded-e-md h-full px-3"
                aria-label="Search"
            >
                <SearchIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
            </button>
        </form>
    );
}