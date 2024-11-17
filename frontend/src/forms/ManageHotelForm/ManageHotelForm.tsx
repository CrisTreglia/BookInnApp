import { FormProvider, useForm } from "react-hook-form";

export type HotelFormData = {
    name: string;
    city: string;
    country: string;
    description: string;
    type: string;
    adultCount: number;
    childCount: number;
    facilities: string[];
    pricePerNight: number;
    starRating: number;
    imageUrls: FileList;
};

const ManageHotelForm = () => {
        const formMethods = useForm<HotelFormData>();
    return (
        <FormProvider { ...formMethods}>
            <form>
                
            </form>
        </FormProvider>
    );
};

export default ManageHotelForm;