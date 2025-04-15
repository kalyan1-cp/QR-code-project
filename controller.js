const service = require('./service');

exports.generateQR = async (req, res) =>{
    try{
        const {data} = req.body;
        const qrCodeText = service.formatData(data);

        const qrCodeBuffer = await service.generateQRCode(qrCodeText);

        res.setHeader('Content-Disposition', 'attachment; filename=qrcode.png');

        res.type('image/png').send(qrCodeBuffer);

    } catch (err){
        console.error('error generating qr code:', err);
        res.status(500).send({error: 'internal server error'});
    }
};