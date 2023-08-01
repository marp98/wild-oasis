import supabase from "./supabase";

interface CabinFormData {
    name: string;
    max_capacity: number;
    regular_price: number;
    discount: number;
    image: string;
  }

export async function getCabins() {
    const { data, error } = await supabase
    .from('cabins')
    .select('*')

    if (error) {
        console.error(error)
        throw new Error('Cabins could not be loaded.')
    }

    return data;
}

export async function createCabin(newCabin: CabinFormData) {
    const { data, error } = await supabase
        .from('cabins')
        .insert([newCabin])
        .select()

    if (error) {
        console.error(error)
        throw new Error('Cabin could not be created.')
    }

    return data;
}

export async function deleteCabin(id: string) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', id)

    if (error) {
        console.error(error)
        throw new Error('Cabins could not be loaded.')
    }

    return data;
}