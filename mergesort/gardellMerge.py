from random import seed
from random import randint
seed(1)
#seed(randint(0,10))

unsortedList = [randint(0, 100000)for i in range(1000)]
inputArray = unsortedList


def mergeSort(inputArray):
    inputLength = len(inputArray)

    #terminating condition
    if(inputLength < 2):
        return
    middle = inputLength//2
    leftHalf = [0] * middle
    rightHalf = [0] * (inputLength-middle)

    for i in range(0, middle):
        leftHalf[i] = inputArray[i]
    for j in range(middle, inputLength):
        rightHalf[j-middle] = inputArray[j]

    mergeSort(leftHalf)
    mergeSort(rightHalf)

    #define mergeSort Function
    merge(inputArray, leftHalf, rightHalf)


def merge(inputArray, leftHalf, rightHalf):
    leftSize = len(leftHalf)
    rightSize = len(rightHalf)
    i = 0
    j = 0
    k = 0

    while(i < leftSize and j < rightSize):
        if leftHalf[i] <= rightHalf[j]:
            inputArray[k] = leftHalf[i]
            i = i+1
        else:
            inputArray[k] = rightHalf[j]
            j = j+1
        k = k+1
    while i < leftSize:
        inputArray[k] = leftHalf[i]
        i = i+1
        k = k+1
    while j < rightSize:
        inputArray[k] = rightHalf[j]
        j = j+1
        k = k+1


print("unsorted list is: {} ".format(unsortedList))
print("running merge sort....")
mergeSort(inputArray)
print("sorted list is: {} ".format(unsortedList))
