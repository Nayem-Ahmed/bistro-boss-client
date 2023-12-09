import React from 'react';
import Sectiontittle from '../../Shared/Sectiontittle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const  VITE_IMBB = import.meta.env.VITE_IMBB_HOSTING;
const  VITE_IMBB_API =  `https://api.imgbb.com/1/upload?key=${VITE_IMBB}`;

const Additems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit  =async (data) => {
        // img upload imbb
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(VITE_IMBB_API, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            if(menuRes.data.insertedId){
                // show success popup
                reset()
                alert('items added')
            }
        }

    }

    return (
        <div>
            <section>
                <Sectiontittle tittle={"---What's new?---"} subtittle={'ADD AN ITEM'}></Sectiontittle>
            </section>

            <div>
                <form  onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded">

                    <div className="w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeName">
                            Recipe name*
                        </label>
                        <input
                            {...register("name", { required: "Recipe name is required" })}
                            className="w-full p-2 border rounded"
                            type="text"
                            placeholder="Enter recipe name"
                        />

                        <div className="flex flex-wrap -mx-2 mb-4">
                            <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                    Category*
                                </label>
                                <select
                                    {...register("category", { required: "Please select a category" })}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select...</option>
                                    <option value="salad">salad</option>
                                    <option value="pizza">pizza</option>
                                    <option value="soups">Soups</option>
                                    <option value="desserts">Desserts</option>
                                    <option value="drinks">Drinks</option>
                                </select>
                            </div>

                            <div className="w-full md:w-1/2 px-2">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    Price*
                                </label>
                                <input
                                    {...register("price", { required: "Price is required" })}
                                    className="w-full p-2 border rounded"
                                    type="text"
                                    placeholder="Enter price"
                                />
                            </div>
                        </div>
                    </div>

                    <label className="block text-gray-700 text-sm font-bold mb-2 mt-4" htmlFor="aboutYou">
                        Recipe Details
                    </label>
                    <textarea {...register("recipe")} className="w-full p-2 border rounded" placeholder="Enter recipe details"></textarea>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeImage">
                        Recipe Image
                    </label>
                    <input
                        {...register("image")}
                        className="w-full p-2 border rounded"
                        type="file"
                        accept="image/*"
                    />

                    <p className="text-red-500 text-sm">{errors.recipeName?.message}</p>
                    <p className="text-red-500 text-sm">{errors.price?.message}</p>
                    <p className="text-red-500 text-sm">{errors.category?.message}</p>

                    <input
                        type="submit"
                        value="Add Items"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer mt-4"
                    />
                </form>


            </div>
        </div>
    );
};

export default Additems;