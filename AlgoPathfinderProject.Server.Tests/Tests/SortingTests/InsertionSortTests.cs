using AlgoPathfinderProject.Server.Services.Sorting;
using System;
using System.Collections.Generic;
using Xunit;

namespace AlgoPathfinderProject.Server.Tests.SortingTests
{
    public class InsertionSortTests
    {
        private readonly InsertionSort<int> sorter = new InsertionSort<int>();

        ///Sorting a normal unsorted list
        [Fact]
        public void Sort_ShouldSortNormalList()
        {

            var input = new List<int> { 5, 3, 8, 1, 2 };
            var expected = new List<int> { 1, 2, 3, 5, 8 };


            var result = sorter.Sort(input);


            Assert.Equal(expected, result);
        }

        ///Sorting an already sorted list
        [Fact]
        public void Sort_ShouldNotModifySortedList()
        {
            var input = new List<int> { 1, 2, 3, 4, 5 };
            var expected = new List<int> { 1, 2, 3, 4, 5 };

            var result = sorter.Sort(input);

            Assert.Equal(expected, result);
        }

        ///Sorting a reverse-ordered list - worst case Time complexity ;(      
        [Fact]
        public void Sort_ShouldSortReversedList()
        {

            var input = new List<int> { 9, 7, 5, 3, 1 };
            var expected = new List<int> { 1, 3, 5, 7, 9 };


            var result = sorter.Sort(input);


            Assert.Equal(expected, result);
        }

        ///Sorting a list with duplicate elements
        [Fact]
        public void Sort_ShouldHandleDuplicateElements()
        {
            var input = new List<int> { 4, 1, 3, 1, 4, 2 };
            var expected = new List<int> { 1, 1, 2, 3, 4, 4 };

            var result = sorter.Sort(input);

            Assert.Equal(expected, result);
        }

        ///Sorting a single-element list
        [Fact]
        public void Sort_ShouldHandleSingleElementList()
        {
            var input = new List<int> { 42 };
            var expected = new List<int> { 42 };

            var result = sorter.Sort(input);

            Assert.Equal(expected, result);
        }

        ///Sorting an empty list
        [Fact]
        public void Sort_ShouldHandleEmptyList()
        {
            var input = new List<int> { };
            var expected = new List<int> { };

            var result = sorter.Sort(input);


            Assert.Equal(expected, result);
        }

        ///Sorting a null list
        [Fact]
        public void Sort_ShouldHandleNullList()
        {
            List<int> input = null;

            var result = sorter.Sort(input);

            Assert.Empty(result);
        }

        ///Sorting with non-comparable types (should fail at runtime)
        //[Fact(Skip = "This test is expected to fail at compile-time.")]
        //public void Sort_ShouldThrowExceptionForNonComparableTypes() { 
        //    // Arrange: Custom class without IComparable
        //    var nonComparableSorter = new InsertionSort<NonComparableType>();
        //    var input = new List<NonComparableType>
        //        {
        //            new NonComparableType { Name = "A" },
        //            new NonComparableType { Name = "B" }
        //        };

        //    // Act & Assert: Ensure it throws a compile-time error or runtime exception
        //    Assert.Throws<InvalidOperationException>(() => nonComparableSorter.Sort(input));
        //}
    }    
}   
