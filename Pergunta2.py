nums1 = list(input("Digite N números inteiros: ").split())
nums2 = list(input("Digite N números inteiros diferentes: ").split())
print(*sorted(nums1 + nums2))