module.exports = {
    success: (res, data) => {
        res.json({
            status: 200,
            success: 'true',
            message: 'Success',
            data,
        });
    },
};