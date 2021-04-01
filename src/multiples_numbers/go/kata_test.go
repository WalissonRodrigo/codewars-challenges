package kata_test
import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "codewarrior/kata"
)
var _ = Describe("Numeros Multiplos de 3 ou 5", func() {

	It("Multiplos menores que 10", func() {
		Expect(Multiple3And5(10)).To(Equal(23))
	})

	It("Multiplos menores que 25", func() {
		Expect(Multiple3And5(25)).To(Equal(143))
	})

	It("Valores negativos retornam Zero", func() {
		Expect(Multiple3And5(-25)).To(Equal(0))
		Expect(Multiple3And5(0)).To(Equal(0))
		Expect(Multiple3And5(1)).To(Equal(0))
	})

	It("Multiplos menores que 6944", func() {
		Expect(Multiple3And5(6944)).To(Equal(11250900))
	})
})