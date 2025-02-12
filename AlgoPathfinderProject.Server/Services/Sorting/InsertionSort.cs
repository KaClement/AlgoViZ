
namespace AlgoPathfinderProject.Server.Services.Sorting
{
    public class InsertionSort<T> : I_SortingAlgorithm<T> where T : IComparable<T>
    {
        public List<T> Sort(List<T> A)
        {
            try
            {
                if(A == null)
                {
                    Console.WriteLine("Error: The input list cannot be null.");
                    return new List<T>();
                }

                for (int i = 1; i < A.Count; i++)
                {
                    T Key = A[i];
                    int j = i - 1;


                    while (j >= 0 && A[j].CompareTo(Key) > 0)
                    {
                        A[j + 1] = A[j];
                        j -= 1;
                    }
                    A[j + 1] = Key;

                }
                return A;

            }
            catch (InvalidOperationException ex) 
            {
                Console.WriteLine($"Comparison Error: {ex.Message}");
                return A;
            }
            catch (Exception ex) 
            { 
                Console.WriteLine($"Unexpected Error: {ex.Message}");
                return A;
            }

        }



    }
}
