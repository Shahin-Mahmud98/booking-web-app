import axios from "axios";
import InputField from "../addbook/InputField"
import SelectField from "../addbook/SelectField"
import getBaseUrl from "../../../utils/baseUrl";
import { useFetchBookByIdQuery, useUpdateBookMutation } from "../../../redux/features/books/booksApi";
import Swal from "sweetalert2";
import Loading from "../../../components/Loading";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UpdateBookingRoom = () => {
    const {id}=useParams();

    const{data:bookingData,isLoading,isError,refetch}=useFetchBookByIdQuery(id);
    console.log(bookingData)
    const [updateBooking]=useUpdateBookMutation();
    const {register,handleSubmit,setValue,reset}=useForm();

    useEffect(()=>{
        if(bookingData){
            setValue('title',bookingData.title);
            setValue('description',bookingData.description);
            setValue('category',bookingData.category);
            setValue('trending',bookingData.trending);
            setValue('oldPrice',bookingData.oldPrice);
            setValue('newPrice',bookingData.newPrice);
            setValue('coverImage',bookingData.coverImage);
            
        }
    },[bookingData,setValue])
    const onSubmit = async(data)=>{
        const updateBookingData = {
            title: data.title,
            description:data.description,
            category:data.category,
            trending:data.trending,
            oldPrice:Number(data.oldPrice),
            newPrice:Number(data.newPrice),
            coverImage:data.coverImage || bookingData.coverImage,
        };
        try {
            await axios.put(`${getBaseUrl()}/api/books/edit/${id}`,updateBookingData,{
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${localStorage.getItem('token')}`
                }
            })
            Swal.fire({
                title:"Updated Room",
                text:"Your room booking updated Successfully",
                icon:"success",
                showCancelButton:true,
                confirmButtonColor:"#3085d6",
                cancelButtonColor:"#d33",
                confirmButtonText:"Yes",

            });
            await refetch()
        } catch (error) {
            console.log('Failed to update Book.');
            alert("failed to update book");
        }
    }

    //loading handle
    if (isLoading) {
        return <Loading/>
    }
    if (isError) {
        return <div>Error Fetching book data</div>
    }

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Book</h2>

    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Title"
        name="title"
        placeholder="Enter book title"
        register={register}
      />

      <InputField
        label="Description"
        name="description"
        placeholder="Enter book description"
        type="textarea"
        register={register}
      />

      <SelectField
        label="Category"
        name="category"
        options={[
          { value: '', label: 'Choose A Category' },
          { value: 'business', label: 'Business' },
          { value: 'technology', label: 'Technology' },
          { value: 'fiction', label: 'Fiction' },
          { value: 'horror', label: 'Horror' },
          { value: 'adventure', label: 'Adventure' },
        ]}
        register={register}
      />
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            {...register('trending')}
            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
          />
          <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
        </label>
      </div>

      <InputField
        label="Old Price"
        name="oldPrice"
        type="number"
        placeholder="Old Price"
        register={register}
      />

      <InputField
        label="New Price"
        name="newPrice"
        type="number"
        placeholder="New Price"
        register={register}
      />

      <InputField
        label="Cover Image URL"
        name="coverImage"
        type="text"
        placeholder="Cover Image URL"
        register={register}
      />

      <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
        Update Book
      </button>
    </form>
  </div>
)
}

export default UpdateBookingRoom