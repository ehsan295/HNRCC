const express = require("express");
const Employee = require("../../models/empolyee");
const router = express.Router();

// ... (existing routes)


router.delete("/empolyee/:id", async (req, res) => {
  const empolyeId = req.params.id;

  try {
    const deletedEmployee = await Product.findOneAndDelete({ _id: empolyeId });

    if (deletedEmployee) {
      res.json({
        message: "کارمند موفقانه حذف شد",
      });
    } else {
      res.json({
        message: "کارمند یافت نشد",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "خطا در حذف کردن کارمند",
    });
  }
});

module.exports = router;
