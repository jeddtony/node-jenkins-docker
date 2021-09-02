
const router = require('express').Router();

router.get('/', async (req, res) => {
    // console.log('here');
    return res.status(200).json({
        message: "My Rule-Validation API",
        status: "success",
        data: {
          name: "Jed Tony",
          github: "@jeddtony",
          email: "jed@gmail.com",
          mobile: "test permissions",
          twitter: "@main",
        },
      });
});


module.exports = router;